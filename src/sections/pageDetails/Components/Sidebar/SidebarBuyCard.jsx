import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadItem, removeFromCart } from "src/helper";
import LoadingButton from "~components/Buttons/UncontrolledLoadingButton";

const SidebarBuyCard = ({ product, addToCart, buyNow }) => {
  const { cart } = useSelector((store) => store.app);
  const [itemInCartIndex, setItemInCartIndex] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product.purchased && cart && !cart.loading) {
      const found = cart.findIndex(item => item.item_id === product.id);
      setItemInCartIndex(found);
    }
  }, [cart]);

  const _removeFromCart = function (cb) {
    removeFromCart(cart, itemInCartIndex, dispatch, cb);
  }

  const download = function (cb) {
    downloadItem({
      item_id: product.id,
      item_name: product.item_name,
      order_number: product.order_number,
    });
    if (cb) cb();
  }
  return (
    <div className="card  mt-5 mt-lg-0">
      <div className="licence-niceselect pt-4 pl-4 pr-4 pb-0">
        <div className="licence-niceselect">
          <select
            className="nice-select  required"
            id="licence-categories"
            name="custom1"
          >
            <option value="regular">Regular License</option>
            <option value="extend">Extended License</option>
          </select>
        </div>
      </div>
      <div className="pt-4 pb-4 pl-5 pr-5 border-bottom">
        <div className="licence-content active" id="regular">
          <span className="mb-0 ml-auto licence-price">
            ${product?.price || 32}
          </span>
          <ul className="list-unstyled widget-spec  mb-0">
            <li>
              <i className="fe fe-check" aria-hidden="true" /> 6 Months Support
              &amp; Updates
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> Forum Support
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> Best Qulity
              Product
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> One domain
            </li>
          </ul>
        </div>
        {/* <div className="licence-content" id="extend">
          <span className="mb-0 ml-auto licence-price">$632</span>
          <ul className="list-unstyled widget-spec  mb-0">
            <li>
              <i className="fe fe-check" aria-hidden="true" /> 1 year Support
              &amp; Updates
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> Forum Support
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> Best Qulity
              Product
            </li>
            <li>
              <i className="fe fe-check" aria-hidden="true" /> Unlimted domain
            </li>
          </ul>
        </div> */}
      </div>
      <div className="card-body item-user">
        {product.purchased ?
          <LoadingButton variant="success" className="ripple btn-block" size="lg" onClick={download}>
            Download
          </LoadingButton> :
          <>{itemInCartIndex >= 0 ?
            <LoadingButton variant="warning" className="ripple btn-block" size="lg" onClick={_removeFromCart}>
              <i className="fe fe-shopping-cart mr-1" />
              Remove from cart
            </LoadingButton> :
            <>
              <LoadingButton variant="primary" className="ripple btn-block" size="lg" onClick={addToCart}>
                <i className="fe fe-shopping-cart mr-1" />
                Add to Cart
              </LoadingButton>
              <LoadingButton variant="info" className="ripple btn-block" size="lg" onClick={buyNow}>
                Buy Now
              </LoadingButton>
            </>
          }
          </>}
      </div>
      <div className="p-3 border-top text-center bg-light">
        {/* <i className="payment payment-maestro mr-2" /> */}
        <i className="payment payment-paypal mr-2" />
        <i className="payment payment-visa mr-2" />
        <i className="payment payment-mastercard mr-2" />
        <i className="payment payment-cirrus mr-2" />
        <i className="payment payment-discover mr-2" />
      </div>
    </div>
  );
};

export default SidebarBuyCard;
