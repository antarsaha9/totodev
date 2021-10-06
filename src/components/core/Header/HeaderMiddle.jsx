import React from "react";
import Link from "../Link";
import CartDropDownBlock from "./components/CartDropdown"
import NotiDropdownBlock from "./components/NotiDropdown"
import MsgDropdownBlock from "./components/MsgDropdown"
import ProfileDropdownBlock from "./components/ProfileDropdown";
const HeaderBottom =(props) =>{
  return (
    <header className="header-search header-logosec p-2 header-icons">
      <div className="container">
        <div className="d-flex">
          <div className="header-search-logo d-none d-lg-block">
            <Link className="header-logo header-brand-img" to="/" ></Link>
          </div>
          <div className="d-flex ml-auto header-right-icons header-search-icon">
            <CartDropDownBlock {...props}/>
            <NotiDropdownBlock/>
            <MsgDropdownBlock/>
            <ProfileDropdownBlock/>
          </div>
        </div>
      </div>
    </header>
  );
}
export default  HeaderBottom;