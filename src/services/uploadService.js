import axios from "axios";
import API from "./API";
import { setAPIHeader } from "./authService";

export const getUploadUrl = (
  { name: objectName, type: contentType },
  uploadFor = "profile_image"
) => {
  return API.post("/getUploadUrl", { objectName, contentType, uploadFor });
};

export const uploadFile = (url, file, setProgress) => {
  let config = {};

  if (setProgress) {
    config = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );

        if (setProgress) setProgress(percentCompleted);
      },
    };
  }

  return axios.put(url, file, config);
};

export const getMultipartUploadUrls = ({
  objectName,
  contentType,
  partCount,
}) => {
  setAPIHeader();

  return API.post("/getMultipartUploadUrls", {
    objectName,
    contentType,
    partCount,
  });
};

export const getBufferFromObject = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result;
      resolve(arrayBuffer);
    };

    reader.readAsArrayBuffer(file);
  });

export const handleLargeFileUpload = async (file) => {
  const maxChunkSize = 10485760; //10 MB
  const partCount = Math.ceil(file.size / maxChunkSize);

  const { objectPath, uploadId, urls } = await getMultipartUploadUrls({
    objectName: file.name,
    contentType: file.type,
    partCount,
  });

  const fileBuffer = await getBufferFromObject(file);

  const promiseList = urls.map((url, ind) => {
    const part =
      ind < partCount - 1
        ? fileBuffer.slice(maxChunkSize * ind, maxChunkSize * (ind + 1))
        : fileBuffer.slice(ind * maxChunkSize);

    return uploadFile(url, part);
  });

  const resultList = await Promise.all(promiseList);
  const etags = resultList.map((res, ind) => ({
    ETag: res.headers.etag,
    PartNumber: ind + 1,
  }));

  const testq = await API.post("/completeMultipartUpload", {
    objectPath,
    uploadId,
    parts: etags,
  });

  console.log(testq);
};
