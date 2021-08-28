import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { firebaseAuth } from "src/services/firebase";
import { authActions } from "~redux/authSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

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
