import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
import MangeSection from "../../sections/Dashboard/Manage";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Manage Items"
      nestedPageName="Pages"
      currentPageName="Manage Items"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <MangeSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
