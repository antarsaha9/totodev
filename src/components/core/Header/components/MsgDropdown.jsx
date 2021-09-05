import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import msgImage from "../../../../assets/images/users/male/1.jpg";

const dropdownItems = [
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  },
  {
    image: msgImage,
    name: "Jack Wright",
    text: "all the best your template awesome",
    postTime: "3 hours ago",
  }
];

const MsgDropdown = styled.div`
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

const DropdownItem = ({ image, name, postTime , text}) => {
  return (
    <a className="dropdown-item border-bottom" href="#">
      <div className="d-flex align-items-center">
        <div>
          <span
            className="avatar avatar-md brround align-self-center cover-image"
            style={{background:`url(${image})`}}
          />
        </div>
        <div className="d-flex">
          <div className="pl-3">
            <span className="font-weight-semibold">{name}</span> {text}
            <div className="small text-muted">{postTime}</div>
          </div>
        </div>
      </div>
    </a>
  );
};
const MsgDropdownBlock = () => {
  return (
    <MsgDropdown className="dropdown d-md-flex message" as={Dropdown}>
      <Dropdown.Toggle className="nav-link icon" as="a" bsPrefix="none">
        <i className="fe fe-mail" />
        <span className="nav-unread badge badge-info badge-pill">3</span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        align="right"
        className="dropdown-menu dropdown-menu-right dropdown-menu-arrow"
      >
        <div className="message-menu header-dropdown-list dropdown-list-block">
          {dropdownItems.map(({ image, name,text, postTime },index) => {
            return (
              <DropdownItem image={image} text={text} name={name} postTime={postTime} key={index + "msg"}/>
            );
          })}
        </div>
        <div className="dropdown-footer p-3">
          <a href="#" className="fs-14 text-dark text-center">
            See all Messages
          </a>
        </div>
      </Dropdown.Menu>
    </MsgDropdown>
  );
};

export default MsgDropdownBlock;
