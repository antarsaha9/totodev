import { useRouter } from "next/router";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "src/helper";
import { signInToAWS } from "src/services/authService";
import { firebaseApp, firebaseAuth } from "src/services/firebase";
import { authActions } from "~redux/authSlice";

const LoginComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user: previousUserData } = useSelector((store) => store.auth);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      {
        provider: firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
        signInMethod:
          firebaseApp.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      },
      firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
      firebaseApp.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: (data) => {
        const user = data.user;

        const userObject = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        };

        user.getIdToken().then((idToken) => {
          localStorage.setItem("idToken", idToken);
          document.cookie = `idToken=${idToken}; path=/`;

          signInToAWS(userObject, idToken).then((data) => {
            if (data) {
              localStorage.setItem("seller_id", data.id);
              NotificationManager.success("Successfully logged in");
              dispatch(
                authActions.saveUserInfo({
                  ...previousUserData,
                  seller_id: data.id,
                  logged_in: !!(!!data.id & !!user.uid)
                }))

              if (
                window.history.length > 1 &&
                document.referrer.indexOf(window.location.host) !== -1
              ) {
                router.back();
              } 
              // =========== Route replacement will be done by login/register page ==============
              // else {
              //   router.replace(paths.EditProfile);
              // }
            }
          });
        });

        return false;
      },
    },
  };

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
  );
};

export default LoginComponent;
