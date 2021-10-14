import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getItemDetails } from "~services/itemService";
import { getItemComments, getItemReviews, addItemReview, addItemComment } from "~services/reviewService";
import ProductOverviewCard from "./Components/Sidebar/ProductOverviewCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import SliderBlock from "./Components/SliderBlock";
import TabBlockMain from "./Components/TabBlock/TabBlockMain";
import { NotificationManager } from "react-notifications";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import { addToCart as _addToCart } from "src/helper";
import { useDispatch, useSelector } from "react-redux";

const PageDetailsBody = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const { cart } = useSelector((store) => store.app)
  const dispatch = useDispatch();
  const { query, push } = useRouter();

  const reviewItem = function (values, callback) {
    addItemReview({ item_id: product.id, ...values }).then(data => {
      NotificationManager.success(data);
      if (callback) callback();
      loadData();
    });
  }

  const commentItem = function (values, callback) {
    addItemComment({ item_id: product.id, ...values }).then(data => {
      NotificationManager.success(data);
      if (callback) callback();
      loadData();
    });
  }

  const loadData = function () {
    const { id } = query;
    if (query && id) {
      setProduct({ loading: true });
      getItemDetails(id).then((data) => {
        if (data) setProduct(data);
      });
      setReviews({ loading: true });
      getItemReviews(id).then((data) => {
        if (data) setReviews(data.reviews);
      });
      setComments({ loading: true });
      getItemComments(id).then((data) => {
        if (data) setComments(data.comments);
      });
    }
  }

  const addToCart = function (callback) {
    _addToCart(cart, product.id, dispatch, callback);
  }

  const buyNow = function (callback) {
    _addToCart([], product.id, dispatch, () => {
      callback();
      push('/cart');
    });
  }

  useEffect(() => {
    loadData();
  }, [query]);

  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12">
            <ProductOverviewCard product={product} />
            <TabBlockMain {...{ product, comments, reviews, reviewItem, commentItem }} />
            <h3 className="mb-5 mt-6">Related Posts</h3>
            {/*Related Posts*/}
            <SliderBlock product={product} />
            {/*/Related Posts*/}
          </div>
          {/*Right Side Content*/}
          <div className="col-xl-4 col-lg-4 col-md-12">
            {product && product.loading ? <LoaderSpinner /> : <Sidebar {...{ product, addToCart, buyNow }} />}
          </div>
          {/*Rightside Content*/}
        </div>
      </div>
    </section>
  );
};

export default PageDetailsBody;
