import React, { useEffect, useState } from "react";
import { getMyProfile } from "src/services/profileService";
import { getMyReviews } from "src/services/reviewService";
import { getMyItems } from "src/services/itemService";
import withAuth from "~components/Auth/withAuth";
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
  const [items, setItems] = useState(null);
  const loadData = function () {
    setProfile({ loading: true });
    setReview({ loading: true });
    setItems({ loading: true });

    console.debug("Profile ==> getting own details");
    getMyProfile().then(data => data && setProfile(data));
    getMyReviews().then(data => data && setReview(data.reviews));
    getMyItems().then(data => data && setItems(data.items));
  };



  useEffect(() => {
    loadData();
  }, []);

  return (
    <PageWrapper themeConfig={headerConfig}>
      <ProfileBody profile={profile} review={review} sellerItems={items} />
      <NewsletterSection profile={profile} />
    </PageWrapper>
  );
};

export default withAuth(Profile);
