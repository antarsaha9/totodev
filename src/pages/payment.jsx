import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import PaymentBody from "../sections/payment/PaymentBody";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="Payments" nestedPageName="Pages" currentPageName="Payments"/>,
  bannerClasses:"bg-background3"
}
const Payment = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <PaymentBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Payment;
