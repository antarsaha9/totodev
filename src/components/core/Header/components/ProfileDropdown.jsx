import { useRouter } from "next/router";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { paths, signOut } from "src/helper";
import styled from "styled-components";
import { Link } from "~components/core";

const dropdownItems = [
  {
    icon: "ti-write",
    title: "Edit Profile",
    link: paths.EditProfile
  },
  {
    icon: "fe fe-codepen",
    title: "My Itmes",
    link: paths.MyProfile
  },
  // {
  //   icon: "ti-heart",
  //   title: "My Favorite",
  // },
  {
    icon: "ti-palette",
    title: "Managed Items",
    link: paths.ManageItems
  },
  // {
  //   icon: "ti-credit-card",
  //   title: "Payments",
  // },
  // {
  //   icon: "ti-shopping-cart",
  //   title: "Orders",
  // },
  {
    icon: "ti-filter",
    title: "Statements",
    link: paths.Statement
  },
  // {
  //   icon: "ti-harddrive",
  //   title: "Safety Tips",
  // },
  // {
  //   icon: "ti-settings",
  //   title: "Settings",
  // },
];

const ProfileDropdown = styled.div`
  .dropdown-list-block {
    max-height: 350px;
    overflow-y: auto;
    .border-bottom {
      &:last-child {
        border-bottom: 0 !important;
      }
    }
    /* width */
    &::-webkit-scrollbar {
      width: 3px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(151, 163, 185, 0.4);
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(151, 163, 185, 1);
    }
  }
`;

const DropdownItem = ({ icon, title, link = '' }) => {
  return (
    <Link className="dropdown-item" to={link}>
      <i className={`dropdown-icon ${icon}`} />
      {title}
    </Link>
  );
};

const ProfileDropdownBlock = () => {
  const router = useRouter();
  const { profile } = useSelector((store) => store.app);

  const handleSignOut = async () => {
    signOut(router);
  };

  return (
    <ProfileDropdown className="d-md-flex profile-1" as={Dropdown}>
      <Dropdown.Toggle className="nav-link icon" as="a" bsPrefix="none">
        <i className="fe fe-user" />
        <span className="pulse bg-success" />
      </Dropdown.Toggle>
      <Dropdown.Menu
        align="right"
        className="dropdown-menu-right dropdown-menu-arrow"
      >
        <div className="drop-heading">
          <div className="text-center">
            <h5 className="text-dark mb-1">{profile && (`${profile.first_name} ${profile.last_name}`.trim())}</h5>
            {/* <small className="text-muted fs-16 text-primary font-weight-semibold">
              $478.99
            </small> */}
          </div>
        </div>
        <div className="dropdown-divider m-0"></div>
        {dropdownItems.map((payload, index) => {
          return (
            <DropdownItem {...payload} key={index + "prdr"} />
          );
        })}
        <div className="dropdown-divider mt-0" />
        <Dropdown.Item as="button" className="cursor-pointer" onClick={handleSignOut}>
          <i className="dropdown-icon ti-unlock" /> Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </ProfileDropdown>
  );
};

export default ProfileDropdownBlock;
