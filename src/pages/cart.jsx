import React from "react";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../components/core/PageWrapper";
import CartBody from "../sections/Cart/Cartbody";
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
const Cart = ({cart}) => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <CartBody cart={cart} />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default Cart;
