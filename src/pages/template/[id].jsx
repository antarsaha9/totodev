import React from "react";
import BreadcrumbSectionThree from "~components/Breadcrumb/BreadcrumbSectionThree";
import Sepbreadcrumb from "~components/Breadcrumb/Sepbreadcrumb";
import { PageWrapper } from "~components/core";
import NewsletterSection from "~sections/Innerpages/Newsletter/NewsletterSection";
import PageDetailsBody from "~sections/pageDetails/PageDetailsBody";

const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionThree
      number="6,894"
      title="Wordpress Themes Available Now!"
    />
  ),
  bannerClasses: "bg-background",
  seperateBredcrumb: (
    <Sepbreadcrumb nestedPageName="Pages" currentPageName="Details" />
  ),
};

const PageDetails = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <PageDetailsBody />
        <NewsletterSection />
      </PageWrapper>
    </>
  );
};
export default PageDetails;
