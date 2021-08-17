import React, { useEffect } from "react";
import { getUserProfile } from "src/services/profileService";
import NewsletterSection from "~sections/Innerpages/Newsletter/NewsletterSection";
import ProfileBody from "~sections/profile/ProfileBody";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../components/core/PageWrapper";

const headerConfig = {
  bannerInner: (
    <BreadcrumbSectionTwo
      title="User Profile2"
      nestedPageName="Pages"
      currentPageName="User Profile2"
    />
  ),
  bannerClasses: "bg-background3",
};

const Profile = () => {
  useEffect(() => {
    getUserProfile().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <PageWrapper themeConfig={headerConfig}>
        <ProfileBody />
        <NewsletterSection />
      </PageWrapper>
    </>
  );
};
export default Profile;
