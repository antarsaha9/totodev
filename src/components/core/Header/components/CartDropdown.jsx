import React from 'react'
// import Image from 'next/image';
import { Button, Dropdown, Spinner } from "react-bootstrap";
import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';
import LoaderSpinner from '~components/Cards/LoaderSpinner';
import { Link } from '~components/core';
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

const CartProduct = ({ image, title, tag, price, removeFromCart }) => {
  return (
    <div className="border-bottom">
      <div className="d-flex pl-3 pr-4 pt-2 pb-3 align-items-center">
        <div className="br-4 img">
          <img
            src={image}
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
          <button style={{ cursor: "pointer" }} onClick={removeFromCart} className="text-muted bg-none border-0">
            <i className="fe fe-trash-2 fs-13" />
          </button>
          <div className="h5 text-dark mt-1 mb-0">${price}</div>
        </div>
      </div>
    </div>
  );
};
const CartDropDownBlock = ({ cart }) => {
  if (!cart)
    return ""
  return (
    <CartDropdown className="d-md-flex notifications" as={Dropdown}>
      <Dropdown.Toggle className="nav-link icon" as="a" bsPrefix="none">
        <i className="fe fe-shopping-cart" />
        <span className="nav-unread badge badge-danger badge-pill">
          {cart.loading ? <FaSpinner className="fa-spin" style={{ marginLeft: "-3px" }} /> : cart.length}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu
        align="right"
        className="dropdown-menu dropdown-menu-right dropdown-menu-arrow cart-dropdown"
      >
        {cart.loading ? <LoaderSpinner /> : <><div className="dropdown-list-block">
          {cart.length ? cart.map((item, index) => <CartProduct
            image={item.image_url}
            title={item.item_name}
            tag={item.category_name}
            price={item.price}
            key={"cart_item" + index} />) : "Cart is empty"}
        </div>
          <div className="dropdown-footer">
            <div className="btn-list">
              <Link
                to="cart"
                className="btn btn-primary  ripple mb-lg-0"
              >
                View Cart
              </Link>
              <Link
                // variant="secondary"
                className="btn btn-secondary ripple mb-lg-0"
                disabled={cart.length === 0}
                to="/checkout"
              // onClick={() => console.log("checkout called")}
              >
                Checkout
              </Link>
            </div>
          </div></>}
      </Dropdown.Menu>
    </CartDropdown>
  )
}

export default CartDropDownBlock;