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
    firebaseAuth.onAuthStateChanged((user) => {
      if (user?.uid)
        dispatch(
          authActions.saveUserInfo({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      else dispatch(authActions.saveUserInfo(null));
    });
  }, []);

  return children;
};

export default Auth;
