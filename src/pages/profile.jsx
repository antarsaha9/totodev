import React, { useEffect, useState } from "react";
import { getMyProfile } from "src/services/profileService";
import { getSellerReviews } from "src/services/reviewService";
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
  const [review, setReview] = useState(null);

  const loadData = async () => {
    const promiseList = [];

    promiseList.push(getMyProfile());
    promiseList.push(getSellerReviews());

    const [profileData, reviewData] = await Promise.all(promiseList);

    setProfile(profileData);
    setReview(reviewData);
    console.log(profileData, reviewData);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageWrapper themeConfig={headerConfig}>
      <ProfileBody profile={profile} review={review} />
      <NewsletterSection profile={profile} />
    </PageWrapper>
  );
};

export default Profile;
