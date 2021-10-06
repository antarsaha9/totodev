// import React from "react";
import Head  from "next/head";
import {useContext} from "react";
// import Loader from "../../Loader"
// import favicon from '../../../assets/image/favicon.png';
import GlobalHeaderContext from "../../../context/GlobalHeaderContext";
import Header from "../Header";
import DashboardNav from "../../DashboardNav";
import FooterSection from "../../Footer";
const Layout =({
  loader,
  children,
  ...rest
}) =>{
  // const [preloader,setPreloader] = useState(loader);
  // useEffect(() => {
  //   setPreloader(false);;
  // },[]);
  const sitectx = useContext(GlobalHeaderContext);
  return (
    <>
      <Head>
            <title>Templist Next Landing Template</title>
            {/* <link rel="icon" type="image/png" href={favicon} /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0"/>
      </Head>
      {/* <Loader show={preloader}/> */}
      <Header {...rest}/>
      {sitectx.header.dashboardNav? <DashboardNav/> : null}
      
        {children}
      <FooterSection/>
    </>
  )
}
export default  Layout;