import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "src/services/firebase";
import { authActions } from "~redux/authSlice";
import protectedPaths from "./protectedPaths";

const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((store) => store.auth);
  const { pathname } = useRouter();

  useEffect(() => {
    if (protectedPaths.includes(pathname)) {
      console.log("kdflakdsfads");
    }
  }, [pathname, loading, user]);

  useEffect(() => {
    const unregisterAuthObserver = firebaseAuth.onAuthStateChanged(
      async (user) => {
        if (user?.uid) {
          const idToken = localStorage.getItem("idToken");
          const seller_id = localStorage.getItem("seller_id");

          const userObject = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            seller_id,
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
