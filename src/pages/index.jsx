import React from "react";
import BreadcrumbSectionOne from "../components/Breadcrumb/BreadcrumbSectionOne";
import PageWrapper from "../components/core/PageWrapper";
import BlogSection from "../sections/home1/Blog";
import DownloadSection from "../sections/home1/Download";
import FactSection from "../sections/home1/Fact";
import FeatureSection from "../sections/home1/Feature";
import FeaturedTemplateSection from "../sections/home1/FeaturedTemplate";
import LatestTemplateSection from "../sections/home1/LatestTemplates";
import NewsletterSection from "../sections/home1/Newsletter";
import ServiceSection from "../sections/home1/Service";
import TestimonialSection from "../sections/home1/Testimonial";

const headerConfig = {
  bannerSearch: (
    <BreadcrumbSectionOne
      title="Create your Business With MarketPlace"
      text="It is a long established fact that a reader will be distracted by the readable."
    />
  ),
};

const IndexPage = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <LatestTemplateSection />
        <FeatureSection />
        <FeaturedTemplateSection />
        <FactSection />
        <ServiceSection />
        <TestimonialSection />
        <BlogSection />
        <DownloadSection />
        <NewsletterSection />
        {/* {console.log(ImageTest)} */}
      </PageWrapper>
    </>
  );
};

export default IndexPage;
