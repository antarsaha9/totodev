import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { paths } from "src/helper";
import LoginComponent from "~components/Auth/LoginComponent";
import { PageWrapper } from "~components/core";
import BreadCrumbSection from "~sections/Innerpages/BreadCrumb/BreadCrumbSection";

const Login = ({ isLoggedIn }) => {
  const router = useRouter();
  const logged_in = isLoggedIn();
  useEffect(() => {
    if (logged_in) {
      router.push(paths.EditProfile);
    }
  }, [logged_in]);
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
