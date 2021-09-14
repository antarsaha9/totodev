import API from "./API";

const { firebaseAuth } = require("./firebase");

export const signupWithEmailPassword = ({ email, password, name }) =>
  new Promise(async (res, rej) => {
    try {
      const user = await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      user.user.updateProfile({ displayName: name });
      res(user.user);
    } catch (error) {
      rej(error);
    }
  });

export const setAPIHeader = (idToken) => {
  const token = idToken || localStorage?.getItem("idToken");
  API.setHeader(token);
};

export const removeAPIHeader = () => {
  delete API.axios.defaults.headers;
};

export const signInToAWS = (data, idToken) => {
  setAPIHeader(idToken);
  return API.post("/login", data);
};

export const signOut = async () => {
  const p1 = firebaseAuth.signOut();
  const p2 = API.post("/logout");

  return Promise.all([p1, p2]);
};
