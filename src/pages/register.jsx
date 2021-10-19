import React from "react";
import LoginComponent from "~components/Auth/LoginComponent";
import BreadCrumbSection from "~sections/Innerpages/BreadCrumb/BreadCrumbSection";
import PageWrapper from "../components/core/PageWrapper";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
import RegisterBodySection from "../sections/register/RegisterBody";

// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadCrumbSection />,
  bannerClasses: "bg-background3",
};

const Register = () => {
  return (
    <PageWrapper themeConfig={headerConfig}>
      {/* <RegisterBodySection /> */}
      <h4 class="text-center pt-4">Please sign in to register</h4>

      <LoginComponent />
      <NewsLetterSection />
    </PageWrapper>
  );
};

export default Register;
