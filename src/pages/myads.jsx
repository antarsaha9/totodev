import React from "react";
import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
import MyAdsBody from "../sections/myads/AdsBody";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="My Items" nestedPageName="Pages" currentPageName="My Items"/>,
  bannerClasses:"bg-background3"
}
const MyAds = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <MyAdsBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default MyAds;
