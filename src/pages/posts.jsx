import React from "react";
import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
import PostBody from "../sections/posts/PostBody";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="Item Posts" nestedPageName="Pages" currentPageName="Item Posts"/>,
  bannerClasses:"bg-background3"
}
const Posts = () => {
  return (
    <>
     <PageWrapper themeConfig={headerConfig}>
        <PostBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Posts;
