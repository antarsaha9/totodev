import React from "react";
import withAuth from "~components/Auth/withAuth";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
import UploadSection from "../../sections/Dashboard/Upload/Upload";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";

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
export default withAuth(Dashboard);
