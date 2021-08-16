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

export const signInToAWS = async (data, idToken) => {
  API.setHeader(idToken);
  return API.post("/login", data);
};
