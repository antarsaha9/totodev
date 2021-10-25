import React, { useEffect, useState } from "react";
import withAuth from "~components/Auth/withAuth";
import { checkout, completePayment } from "~services/purchaseService";
import PageWrapper from "../components/core/PageWrapper";
// import "../assets/scss/colors6.scss"
import CheckoutBody from "../sections/Checkout";
import BreadCrumbSection from "../sections/Innerpages/BreadCrumb";
import NewsLetterSection from "../sections/Innerpages/Newsletter";
import { NotificationManager } from "react-notifications";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { paths, reloadCart } from "src/helper";


const Checkout = ({ cart }) => {
  const [checkoutData, setCheckoutData] = useState(null)
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart && !cart.loading && cart.length === 0) {
      router.push(paths.PageList);
    }
    // else {
    // }
  }, [cart]);

  const purchase = function (params, cb) {
    setCheckoutData({ loading: true });
    checkout({ items: cart, billing_info: params }).then(data => {
      console.log(data);
      setCheckoutData(data);
      if (cb) cb();
    });
  }

  const confirmPayment = function (values) {
    completePayment(values).then(data => {
      console.log(data);
      NotificationManager.success("Payment successful!");
      setTimeout(() => {
        reloadCart(dispatch);
        router.push(paths.PurchasedItems);
      }, 2000);
      // setCheckoutData(data);
    })
  }
  return (
    <>
      <PageWrapper>
        <BreadCrumbSection />
        <CheckoutBody checkoutData={checkoutData} confirmPayment={confirmPayment} purchase={purchase} />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default withAuth(Checkout);
