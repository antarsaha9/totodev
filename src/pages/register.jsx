import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
import RegisterBodySection from "../sections/register/RegisterBody";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="Register" nestedPageName="Pages" currentPageName="Register"/>,
  bannerClasses:"bg-background3"
}
const Register = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <RegisterBodySection/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Register;
