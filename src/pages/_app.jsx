import Router from "next/router";
import Layout  from "../components/core/Layout"
import Loader from "../components/Loader"
import "../../node_modules/slick-carousel/slick/slick.css";
import "../assets/scss/style.scss";
import "../assets/scss/colors6.scss"
import "../assets/fonts/feather/feather.css"
import "../assets/fonts/font-awesome/css/font-awesome.min.css"
import "../assets/fonts/simple-line-icons/simple-line-icons.css"
import "../assets/fonts/themify/themify.css"
import { GlobalHeaderProvider} from "../context/GlobalHeaderContext";
import { useState , useEffect} from "react";


function MyApp({ Component, pageProps }) {

  const [loader,setLoader] = useState(true)
  useEffect(() => {
    setTimeout(function(){
      setLoader(false);
      console.log("finished");
    } , 5000);
  }, []);

  Router.onRouteChangeStart = (url) => {
    // Some page has started loading
    setLoader(true) 
};

Router.onRouteChangeComplete = (url) => {
    // Some page has finished loading
    setTimeout(setLoader(false) , 5000) // set state to pass to loader prop
};

Router.onRouteChangeError = (err, url) => {
    // an error occurred.
    // some error logic
}; 
   if(loader){
      return(<Loader show={loader}/>)
   }
   return(<GlobalHeaderProvider>
    <Layout>
      <Loader show={loader}/>
      <Component {...pageProps} />
    </Layout>
  </GlobalHeaderProvider>)
  }



  
  export default MyApp