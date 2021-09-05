import React from "react";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../components/core/PageWrapper";
import CardtBody from "../sections/Cart/Cartbody";
import NewsLetterSection from "../sections/Innerpages/Newsletter";

const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="Cart"
      nestedPageName="Pages"
      currentPageName="Cart"
    />
  ),
  bannerClasses: "bg-background3",
};
const Cart = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <CardtBody />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Cart;
