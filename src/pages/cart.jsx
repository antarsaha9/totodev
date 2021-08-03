import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
import CardtBody from "../sections/Cart/Cartbody";
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="Cart" nestedPageName="Pages" currentPageName="Cart"/>,
  bannerClasses:"bg-background3"
}
const Cart = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <CardtBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Cart;
