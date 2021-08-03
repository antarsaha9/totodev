import React from "react";
import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionOne from "../components/Breadcrumb/BreadcrumbSectionOne";
import LatestTemplateSection from "../sections/home1/LatestTemplates";
import FeatureSection from "../sections/home1/Feature";
import FactSection from "../sections/home1/Fact";
import ServiceSection from "../sections/home1/Service";
import DownloadSection from "../sections/home1/Download";
import NewsletterSection from "../sections/home1/Newsletter";
import TestimonialSection from "../sections/home1/Testimonial";
import BlogSection from "../sections/home1/Blog";
import FeaturedTemplateSection from "../sections/home1/FeaturedTemplate";

const headerConfig = {
  bannerSearch: <BreadcrumbSectionOne title="Create your Business With MarketPlace" text="It is a long established fact that a reader will be distracted by the readable."/>
}

const IndexPage = () => {
  
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <LatestTemplateSection/>
        <FeatureSection/>
        <FeaturedTemplateSection/>
        <FactSection/>
        <ServiceSection/>
        <TestimonialSection/>
        <BlogSection/><DownloadSection/>
        <NewsletterSection/>
        {/* {console.log(ImageTest)} */}
      </PageWrapper>
    </>
  );
};
export default IndexPage;
