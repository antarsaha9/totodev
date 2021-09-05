import React from "react";
import withAuth from "~components/Auth/withAuth";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
import EditSection from "../../sections/Dashboard/Edit";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";

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

export default withAuth(Dashboard);
