import React from "react";
import { Card } from "react-bootstrap";
import LoginComponent from "~components/Auth/LoginComponent";
import { PageWrapper } from "~components/core";
import BreadCrumbSection from "~sections/Innerpages/BreadCrumb/BreadCrumbSection";

const Login = () => {

  return (
    <PageWrapper>
      <BreadCrumbSection />
      <Card className="mb-0 py-5">

        <LoginComponent />
      </Card>
    </PageWrapper>
  );
};

export default Login;
