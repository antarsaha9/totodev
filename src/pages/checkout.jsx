import React from "react";
import withAuth from "~components/Auth/withAuth";
import PageWrapper from "../components/core/PageWrapper";
// import "../assets/scss/colors6.scss"
import CheckoutBody from "../sections/Checkout";
import BreadCrumbSection from "../sections/Innerpages/BreadCrumb";
import NewsLetterSection from "../sections/Innerpages/Newsletter";

const Checkout = () => {
  return (
    <>
      <PageWrapper>
        <BreadCrumbSection />
        <CheckoutBody />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default withAuth(Checkout);
