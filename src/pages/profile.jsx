import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { getMyProfile, getSellerProfile } from "src/services/profileService";
import { getSellerReviews, getMyReviews, addSellerReview } from "src/services/reviewService";
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
  const user_id = (useRouter().query || {}).id;
  const loadData = function () {
    setProfile({ loading: true });
    setReview({ loading: true });
    if (user_id) {
      console.debug("Profile ==> getting anothers details");
      getSellerProfile(user_id).then(data => setProfile(data));
      getSellerReviews(user_id).then(data => setReview(data.reviews));
    } else {
      console.debug("Profile ==> getting own details");
      getMyProfile().then(data => setProfile(data));
      getMyReviews().then(data => setReview(data.reviews));
    }
  };

  const reviewProfile = function (values, callback) {
    if (profile.id) {
      const payload = {
        "review": values.review,
        "name": values.name,
        "email": values.email,
        "member_id": profile.id
      };
      console.log(payload);

      addSellerReview(payload).then(data => {
        if (data) {
          NotificationManager.success(data);
          loadData();
        }
        if (callback) callback();
      })
    }
  }

  useEffect(() => {
    loadData();
  }, [user_id]);

  return (
    <PageWrapper themeConfig={headerConfig}>
      <ProfileBody profile={profile} review={review} reviewProfile={reviewProfile} />
      <NewsletterSection profile={profile} />
    </PageWrapper>
  );
};

export default withAuth(Profile);
