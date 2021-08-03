import React from 'react'
 import profileImage from "../../assets/images/users/male/2.jpg"
 import Image from "next/image";

const ProfileNavigation = ({image=profileImage,profileName="Jacob Smith"})=>{
return(
	<div className="card">
  <div className="card-header">
    <h3 className="card-title">My Dashboard</h3>
  </div>
  <div className="card-body text-center item-user ">
    <div className="profile-pic">
      <div className="profile-pic-img mb-4">
        <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online" />
        <Image layout="fixed" width="80" height="80" src={image} className="brround" alt="user" />
      </div>
      <a href="userprofile.html" className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">{profileName}</h4></a>
    </div>
  </div>
  <aside className="app-sidebar doc-sidebar my-dash">
    <div className="app-sidebar__user clearfix">
      <ul className="side-menu">
        <li>
          <a className="side-menu__item " href="mydash.html"><i className="side-menu__icon fe fe-user" /><span className="side-menu__label">Edit Profile</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="myads.html"><i className="side-menu__icon fe fe-codepen" /><span className="side-menu__label">My Items</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="myfavorite.html"><i className="side-menu__icon fe fe-heart" /><span className="side-menu__label">My Favorite</span></a>
        </li>
        <li className="slide">
          <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon fe fe-folder-plus" /><span className="side-menu__label">Managed Items</span><i className="angle fa fa-angle-right" /></a>
          <ul className="slide-menu">
            <li><a className="slide-item" href="manged.html"><i className="fa fa-caret-right mr-2 text-muted" /> Managed Items</a></li>
            <li className="sub-slide">
              <a className="side-menu__item border-top-0 slide-item" href="#" data-toggle="sub-slide"><span className="side-menu__label"><i className="fa fa-caret-right mr-2 text-muted" /> Submenu</span> <i className="sub-angle fa fa-angle-right" /></a>
              <ul className="child-sub-menu ">
                <li><a className="slide-item" href="#"><i className="fa fa-caret-right mr-2 text-muted" /> Level 1</a></li>
                <li><a className="slide-item" href="#"><i className="fa fa-caret-right mr-2 text-muted" />  Level 2</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a className="side-menu__item" href="payments.html"><i className="side-menu__icon fe fe-credit-card" /><span className="side-menu__label">Payments</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="orders.html"><i className="side-menu__icon fe fe-shopping-cart" /><span className="side-menu__label">Orders</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="statements.html"><i className="side-menu__icon fe fe-edit" /><span className="side-menu__label">Statements</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="tips.html"><i className="side-menu__icon fe fe-compass" /><span className="side-menu__label"> Safety Tips</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="settings.html"><i className="side-menu__icon fe fe-settings" /><span className="side-menu__label">Settings</span></a>
        </li>
        <li>
          <a className="side-menu__item" href="#"><i className="side-menu__icon fe fe-power" /><span className="side-menu__label">Logout</span></a>
        </li>
      </ul>
    </div>
  </aside>
</div>

)
}
export default  ProfileNavigation;