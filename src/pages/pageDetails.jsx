import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionThree from "../components/Breadcrumb/BreadcrumbSectionThree";
import Sepbreadcrumb from "../components/Breadcrumb/Sepbreadcrumb";
import PageDetailsBody from "../sections/pageDetails/PageDetailsBody";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionThree number="6,894" title="Wordpress Themes Available Now!" />,
  bannerClasses:"bg-background",
  seperateBredcrumb:<Sepbreadcrumb  nestedPageName="Pages" currentPageName="Details"/>
}
const PageDetails = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <PageDetailsBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default PageDetails;
