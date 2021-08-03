import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
import UploadSection from "../../sections/Dashboard/Upload/Upload";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Upload Items"
      nestedPageName="Pages"
      currentPageName="Upload Items"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <UploadSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
