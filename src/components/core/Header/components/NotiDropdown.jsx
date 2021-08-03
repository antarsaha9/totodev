import React from 'react'
import { Dropdown } from "react-bootstrap";
import styled from 'styled-components';
import cartImage from "../../../../assets/images/media/pictures/small/01.jpg"

const dropdownItems = [
  {
    icon:"fe fe-mail text-primary",
    title:"Commented on your post.",
    postTime:"3 hours ago"
  },
  {
    icon:"fe fe-user text-secondary",
    title:"New User Registered.",
    postTime:"1 day ago"
  },
  {
    icon:"fe fe-upload text-purple",
    title:"New file has been uploaded",
    postTime:"50 sec ago"
  },
  {
    icon:"fe fe-alert-circle text-danger",
    title:"Commented on your post.",
    postTime:"3 hours ago"
  },
  {
    icon:"fe fe-mail text-primary",
    title:"System alert",
    postTime:"2 days ago"
  },
  {
    icon:"fe fe-server text-warning",
    title:"Server Rebooted",
    postTime:"45 mins ago"
  },
  {
    icon:"fe fe-layers text-secondary",
    title:"Completed One task",
    postTime:"3 mins ago"
  }
]


const NotiDropdown = styled.div`
.dropdown-list-block{
    max-height: 350px;
    overflow-y:auto;
    .border-bottom{
        &:last-child{
            border-bottom:0!important;
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
    background: rgba(151, 163, 185,0.4); 
}

/* Handle on hover */
&::-webkit-scrollbar-thumb:hover {
  background: rgba(151, 163, 185,1); 
}
}
`

const DropdownItem = ({icon,title,postTime,}) => {
  return (
    <a href="#" className="dropdown-item d-flex">
      <div className="text-primary fs-18 mr-3 ">
        <i className={icon} />
      </div>
      <div>
        <h6 className="mb-1">{title}</h6>
        <div className="small text-muted">{postTime}</div>
      </div>
    </a>
  );
};
const NotiDropdownBlock = () =>{
    return(
            <NotiDropdown className="d-md-flex notifications" as={Dropdown}>
              <Dropdown.Toggle className="nav-link icon" as="a" bsPrefix="none">
                <i className="fe fe-bell" />
                <span className="pulse bg-success" />
              </Dropdown.Toggle>
              <Dropdown.Menu align="right" className="dropdown-menu-right dropdown-menu-arrow">
                <div className="notifications-menu header-dropdown-list dropdown-list-block">
                 {dropdownItems.map(({icon,title,postTime},index)=>{
                   return(
                    <DropdownItem icon={icon} title={title} postTime={postTime} key={index + "ndr"}/>
                   )
                 })}
                  </div>
                <div className="dropdown-footer p-3">
                  <a href="#" className="fs-14 text-dark text-center">
                    View all Notification
                  </a>
                </div>
              </Dropdown.Menu>
            </NotiDropdown>
    )
}

export default NotiDropdownBlock;