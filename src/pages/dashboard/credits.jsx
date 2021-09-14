import React from "react";
import withAuth from "~components/Auth/withAuth";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
import CreditsSection from "../../sections/Dashboard/Credits";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";

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
export default withAuth(Dashboard);
