import React from "react";

import PageWrapper from "../../components/core/PageWrapper";
// import MenuNavbar from "../components/myDashBord/MenuNav";
import BreadcrumbSectionTwo from "../../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
import WithdrawalsBody from "../../sections/Dashboard/Withdrawals";
const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Widthdrawals"
      nestedPageName="Pages"
      currentPageName="Widthdrawals"
    />
  ),
  bannerClasses: "bg-background3",
  dashboardNav: true,
};
const Dashboard = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <WithdrawalsBody />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Dashboard;
