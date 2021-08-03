import React from "react";
import { Card } from "react-bootstrap";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebaseApp, firebaseAuth } from "src/services/firebase";
import { PageWrapper } from "~components/core";
import BreadCrumbSection from "~sections/Innerpages/BreadCrumb/BreadCrumbSection";

const uiConfig = {
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
    signInSuccessWithAuthResult: () => {
      console.log("success");
      return false;
    },
  },
};

const Login = () => {
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
