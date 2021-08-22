import React, { useEffect, useState } from "react";
import { getMyProfile } from "src/services/profileService";
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
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getMyProfile().then((data) => {
      setProfile(data);
    });
  }, []);

  return (
    <PageWrapper themeConfig={headerConfig}>
      <ProfileBody profile={profile} />
      <NewsletterSection profile={profile} />
    </PageWrapper>
  );
};

export default Profile;
