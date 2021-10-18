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
import { reloadCart } from "src/helper";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);
  const { cart } = useSelector((store) => store.app);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

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
    if (user)
      reloadCart(dispatch)
  }, []);

  return (
    <Auth>
      <GlobalHeaderProvider>
        <Layout cart={cart}>
          {loader && <Loader show={loader} />}
          <Component {...pageProps} cart={cart} />
        </Layout>
      </GlobalHeaderProvider>
      <NotificationContainer />
    </Auth>
  );
};

export default reduxWrapper.withRedux(App);
