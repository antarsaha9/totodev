import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { getSellerProfile } from "src/services/profileService";
import { getSellerReviews, addSellerReview } from "src/services/reviewService";
import { getSellerItemList } from "src/services/itemService";
import NewsletterSection from "~sections/Innerpages/Newsletter/NewsletterSection";
import ProfileBody from "~sections/profile/ProfileBody";
import BreadcrumbSectionTwo from "../components/Breadcrumb/BreadcrumbSectionTwo";
import PageWrapper from "../components/core/PageWrapper";
import { paths } from "src/helper";
import { useSelector } from "react-redux";

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
  const { query, replace, isReady } = useRouter();
  const { user: isSignedIn } = useSelector((store) => store.auth);

  const user_id = (query || {}).id;
  const loadData = function () {
    setProfile({ loading: true });
    setReview({ loading: true });
    setItems({ loading: true });
    if (user_id) {
      console.debug("Profile ==> getting anothers details");
      getSellerProfile(user_id).then(data => data && setProfile(data));
      getSellerReviews(user_id).then(data => data && setReview(data.reviews));
      getSellerItemList(user_id).then(data => data && setItems(data.items));
    } else {
      console.log("replacing");
      replace({ pathname: paths.MyProfile, query });
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
    if (isReady)
      loadData();
  }, [user_id]);

  return (
    <PageWrapper themeConfig={headerConfig}>
      <ProfileBody profile={profile} review={review} reviewProfile={isSignedIn && reviewProfile} sellerItems={items} />
      <NewsletterSection profile={profile} />
    </PageWrapper>
  );
};

export default Profile;
