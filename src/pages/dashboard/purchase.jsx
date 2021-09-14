import React from "react";
import withAuth from "~components/Auth/withAuth";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../../components/core/PageWrapper";
import PurchaseSection from "../../sections/Dashboard/Purchase";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="My Dashboard"
      nestedPageName="Pages"
      currentPageName="Purchase"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <PurchaseSection />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default withAuth(Dashboard);
