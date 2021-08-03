import React,{useState} from "react";
import Link from "../components/core/Link"
const GlobalHeaderContext = React.createContext();
export const headerDefault = {
  bodyDark: false,
  headerDark: false,
  footerDark: false,
  headerStyle: "style1", //style2, style3
  headerFluid: true,
  headerButton: (
    <>
      <Link to="/#" className="btn heading-default-color gr-hover-text-primary">
        + Submit New Job
      </Link>
    </>
  ),
  headerClassName: "site-header--menu-logo-middle",
  headerSocial: false,
  headerLogoClassName: "",
  footerStyle: "style1",
  footerClassName: "",
  bannerInner:false,
  bannerSearch:false,
  bannerClasses:false,
  seperateBredcrumb:false,
  dashboardNav:false,
};

const GlobalHeaderProvider = ({children}) =>{
  const [header , setHeader] = React.useState(headerDefault);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  const changeHeader = (headerConfig = headerDefault) => {
    setHeader({
      ...header,
      ...headerConfig,
    });
  };
  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const closeOffCanvas = () => {
    setVisibleOffCanvas(false);
  };
  // console.log(GlobalHeaderContext);
  return (<GlobalHeaderContext.Provider value={{header,changeHeader,
    visibleOffCanvas,
    toggleOffCanvas,
    closeOffCanvas}}>
    {children}
  </GlobalHeaderContext.Provider>)
}


export default GlobalHeaderContext;
export { GlobalHeaderProvider };