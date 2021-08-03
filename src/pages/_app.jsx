// import Router from "next/router";
// import { useEffect, useState } from "react";
// import Auth from "~components/Auth/Auth";
// import { reduxWrapper } from "~redux/reduxStore";
// import Layout from "../components/core/Layout";
// import Loader from "../components/Loader";
// import "../../node_modules/slick-carousel/slick/slick.css";
// import "../assets/scss/style.scss";
// import "../assets/scss/colors6.scss"
// import "../assets/fonts/feather/feather.css"
// import "../assets/fonts/font-awesome/css/font-awesome.min.css"
// import "../assets/fonts/simple-line-icons/simple-line-icons.css"
// import "../assets/fonts/themify/themify.css"
import Router from "next/router";
import { useEffect, useState } from "react";
import Auth from "~components/Auth/Auth";
import { reduxWrapper } from "~redux/reduxStore";
import Layout from "../components/core/Layout";
import Loader from "../components/Loader";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../assets/scss/style.scss";
import "../assets/scss/colors6.scss"
import "../assets/fonts/feather/feather.css"
import "../assets/fonts/font-awesome/css/font-awesome.min.css"
import "../assets/fonts/simple-line-icons/simple-line-icons.css"
import "../assets/fonts/themify/themify.css"
import { GlobalHeaderProvider } from "../context/GlobalHeaderContext";

const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);

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
  }, [Router]);

  if (loader) {
    return <Loader show={loader} />;
  }

  return (
    <Auth>
      <GlobalHeaderProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalHeaderProvider>
    </Auth>
  );
};

export default reduxWrapper.withRedux(App);
