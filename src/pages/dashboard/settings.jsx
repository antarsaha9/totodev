import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
import SettingSection from "../../sections/Dashboard/Settings";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Settings"
      nestedPageName="Pages"
      currentPageName="Settings"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <SettingSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
