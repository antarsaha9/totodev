import { useRouter } from "next/router";
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NotificationManager } from "react-notifications";
import { paths } from "src/helper";
import { signInToAWS } from "src/services/authService";
import { firebaseApp, firebaseAuth } from "src/services/firebase";

const LoginComponent = () => {
  const router = useRouter();

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

              if (
                window.history.length > 1 &&
                document.referrer.indexOf(window.location.host) !== -1
              ) {
                router.back();
              } else {
                router.replace(paths.EditProfile);
              }
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
