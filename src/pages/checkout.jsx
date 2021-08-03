import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadCrumbSection from "../sections/Innerpages/BreadCrumb";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
import CheckoutBody from "../sections/Checkout";
const Checkout = () => {
  return (
    <>
      <PageWrapper>
        <BreadCrumbSection/>
        <CheckoutBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Checkout;
