import Router from "next/router";
import { useEffect, useState } from "react";
import { NotificationContainer } from "react-notifications";
import Auth from "~components/Auth/Auth";
import { reduxWrapper } from "~redux/reduxStore";
import "../assets/scss/style.scss";
import Layout from "~components/core/Layout";
import Loader from "../components/Loader";
import { GlobalHeaderProvider } from "../context/GlobalHeaderContext";
import { useDispatch, useSelector } from "react-redux";
import { postLoginAction } from "src/helper";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);
  const { cart } = useSelector((store) => store.app);
  const { user } = useSelector((store) => store.auth);
  const logged_in = !!(user && user.logged_in);
  const dispatch = useDispatch();

  const isLoggedIn = function () {
    return logged_in;
  }

  useEffect(() => {
    Router.onRouteChangeStart = (url) => {
      setLoader(true);
    };
    Router.onRouteChangeComplete = (url) => {
      setLoader(false);
    };
    Router.onRouteChangeError = (err, url) => {
      setLoader(false);
    };
  }, []);

  useEffect(() => {
    if (logged_in)
      postLoginAction(dispatch);
  }, [logged_in]);

  return (
    <Auth>
      <GlobalHeaderProvider>
        <Layout {...{ isLoggedIn, cart }}>
          {loader && <Loader show={loader} />}
          <Component {...pageProps} {...{ cart, isLoggedIn }} />
        </Layout>
      </GlobalHeaderProvider>
      <NotificationContainer />
    </Auth>
  );
};

export default reduxWrapper.withRedux(App);
