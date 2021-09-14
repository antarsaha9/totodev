export const createYupObject = (data = {}) => {
  const initialValue = {};
  const shape = {};

  for (const key in data) {
    initialValue[key] = data[key][0];

    if (data[key][1]) {
      shape[key] = data[key][1];
    }
  }

  return { initialValue, shape };
};
