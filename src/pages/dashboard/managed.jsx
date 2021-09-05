import React from "react";
import withAuth from "~components/Auth/withAuth";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
import MangeSection from "../../sections/Dashboard/Manage";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";

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

export default withAuth(Dashboard);
