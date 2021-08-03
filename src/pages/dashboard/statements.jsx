import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
import StatementsSection from "../../sections/Dashboard/Statements";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Statements"
      nestedPageName="Pages"
      currentPageName="Statements"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <StatementsSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
