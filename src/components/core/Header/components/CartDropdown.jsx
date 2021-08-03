import React from 'react'
// import Image from 'next/image';
import { Dropdown } from "react-bootstrap";
import styled from 'styled-components';
import cartImage from "../../../../assets/images/media/pictures/small/01.jpg"


const CartDropdown = styled.div`
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

const CartProduct = ({image,title,tag,price}) => {
  return (
    <div className="border-bottom">
      <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
        <div className="br-4 img">
          <img
            src={image.src}
            alt="img"
          />
        </div>
        <div className="d-flex">
          <div className="pl-3">
            <span className="fs-16 h4 d-block">{title}</span>
            <div className="fs-13 text-muted">{tag}</div>
          </div>
        </div>
        <div className="ml-auto text-center">
          <a href="#" className="text-muted">
            <i className="fe fe-trash-2 fs-13" />
          </a>
          <div className="h5 text-dark mt-1 mb-0">{price}</div>
        </div>
      </div>
    </div>
  );
};
const CartDropDownBlock = () =>{
    return(
        <CartDropdown className="d-md-flex notifications" as={Dropdown}>
              <Dropdown.Toggle className="nav-link icon" as="a" bsPrefix="none">
                <i className="fe fe-shopping-cart" />
                <span className="nav-unread badge badge-danger badge-pill">
                  2
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                align="right"
                className="dropdown-menu dropdown-menu-right dropdown-menu-arrow cart-dropdown"
              >
                <div className="dropdown-list-block">
                    <CartProduct image={cartImage} title="HTML Template" tag="HTML" price="$24"/>
                    <CartProduct image={cartImage} title="Wordpress Template" tag="HTML" price="$18"/>
                    <CartProduct image={cartImage} title="Angular Template" tag="HTML" price="$22"/>
                    <CartProduct image={cartImage} title="PHP Template" tag="HTML" price="$12"/>
                    <CartProduct image={cartImage} title="PHP Template" tag="HTML" price="$12"/>
                </div>
                <div className="dropdown-footer">
                  <div className="btn-list">
                    <a
                      href="cart.html"
                      className="btn btn-primary  ripple mb-lg-0"
                    >
                      View Cart
                    </a>
                    <a
                      href="checkout.html"
                      className=" btn btn-secondary  ripple mb-lg-0"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </Dropdown.Menu>
            </CartDropdown>
    )
}

export default CartDropDownBlock;