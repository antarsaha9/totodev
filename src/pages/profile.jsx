import React from "react";

import PageWrapper from "../components/core/PageWrapper";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import ProfileBody from "../sections/profile/ProfileBody";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
// import "../assets/scss/colors6.scss"
const headerConfig = {
  bannerInner: <BreadcrumbSectionTwo title="User Profile2" nestedPageName="Pages" currentPageName="User Profile2"/>,
  bannerClasses:"bg-background3"
}
const Profile = () => {
  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <ProfileBody/>
        <NewsLetterSection/>
      </PageWrapper>
    </>
  );
};
export default Profile;
