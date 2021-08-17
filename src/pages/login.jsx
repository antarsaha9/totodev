import { useRouter } from "next/router";
import React from "react";
import { Card } from "react-bootstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { NotificationManager } from "react-notifications";
import { signInToAWS } from "src/services/authService";
import { firebaseApp, firebaseAuth } from "src/services/firebase";
import { PageWrapper } from "~components/core";
import BreadCrumbSection from "~sections/Innerpages/BreadCrumb/BreadCrumbSection";

const Login = () => {
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
          signInToAWS(userObject, idToken).then((data) => {
            console.log(data);
            console.log(idToken);
            localStorage.setItem("idToken", idToken);
            NotificationManager.success("Successfully logged in");
            router.push("/");
          });
        });

        return false;
      },
    },
  };

  return (
    <PageWrapper>
      <BreadCrumbSection />

      <Card className="mb-0 py-5">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </Card>
    </PageWrapper>
  );
};

export default Login;
