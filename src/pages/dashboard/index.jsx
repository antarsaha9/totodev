import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
import EditSection from "../../sections/Dashboard/Edit";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="My Dashboard"
      nestedPageName="Pages"
      currentPageName="My Dashboard"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <EditSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
