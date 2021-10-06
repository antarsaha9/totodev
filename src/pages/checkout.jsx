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
import { updateCart } from "~services/cartService";


const Checkout = ({ cart }) => {
  const [checkoutData, setCheckoutData] = useState(null)
  const router = useRouter();

  useEffect(() => {
    if (!cart || cart.loading) {

    }
    else {
      setCheckoutData({ loading: true });
      checkout({ items: cart }).then(data => {
        console.log(data);
        setCheckoutData(data);
      })
    }
  }, [cart])

  const confirmPayment = function (values) {
    completePayment(values).then(data => {
      console.log(data);
      NotificationManager.success("payment successful!");
      NotificationManager.success(JSON.stringify(data));
      setTimeout(() => {
        updateCart([]);
        router.push('/pagelist');
      }, 2000);
      // setCheckoutData(data);
    })
  }
  return (
    <>
      <PageWrapper>
        <BreadCrumbSection />
        <CheckoutBody checkoutData={checkoutData} confirmPayment={confirmPayment} />
        <NewsLetterSection />
      </PageWrapper>
    </>
  );
};
export default withAuth(Checkout);
