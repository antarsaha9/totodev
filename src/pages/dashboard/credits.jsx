import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
import CreditsSection from "../../sections/Dashboard/Credits";

const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Credits"
      nestedPageName="Pages"
      currentPageName="Credits"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <CreditsSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
