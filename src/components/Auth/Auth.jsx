import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInToAWS } from "src/services/authService";
import { firebaseAuth } from "src/services/firebase";
import { getUserProfile } from "src/services/profileService";
import { authActions } from "~redux/authSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const { pathname } = useRouter();

  console.log(loading, pathname);

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        const idToken = await user.getIdToken();
        const userObject = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };

        await signInToAWS(userObject, idToken).then((data) => {
          console.log(data);
        });

        const test = await getUserProfile();
        console.log(test);

        dispatch(
          authActions.saveUserInfo({
            ...userObject,
            idToken,
          })
        );
      } else dispatch(authActions.saveUserInfo(null));
    });
  }, []);

  return children;
};

export default Auth;
