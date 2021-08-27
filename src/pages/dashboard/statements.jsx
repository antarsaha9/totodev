import React from "react";
import withAuth from "~components/Auth/withAuth";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
// import "../assets/scss/colors6.scss"
import StatementsSection from "../../sections/Dashboard/Statements";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";

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
export default withAuth(Dashboard);
