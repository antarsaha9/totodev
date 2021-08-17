import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "src/services/firebase";
import { authActions } from "~redux/authSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const { pathname } = useRouter();

  console.log(loading, pathname);

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged(
      async (user) => {
        if (user?.uid) {
          const idToken = localStorage.getItem("idToken");

          const userObject = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          };

          dispatch(
            authActions.saveUserInfo({
              ...userObject,
              idToken,
            })
          );
        } else dispatch(authActions.saveUserInfo(null));
      }
    );

    return () => unregisterAuthObserver();
  }, []);

  return children;
};

export default Auth;
