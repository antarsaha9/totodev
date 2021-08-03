import React from "react";
import PageWrapper from "../../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
import PurchaseSection from "../../sections/Dashboard/Purchase";
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
export default Dashboard;
