import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getItemDetails } from "~services/itemService";
import { updateCart } from "~services/cartService";
import { getItemComments, getItemReviews, addItemReview } from "~services/reviewService";
import ProductOverviewCard from "./Components/Sidebar/ProductOverviewCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import SliderBlock from "./Components/SliderBlock";
import TabBlockMain from "./Components/TabBlock/TabBlockMain";
import { NotificationManager } from "react-notifications";

const PageDetailsBody = () => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const { query, reload } = useRouter();

  const reviewItem = function (values, callback) {
    addItemReview({ item_id: product.id, ...values }).then(data => {
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

  const addToCart = function () {
    updateCart({ items: [{ item_id: product.id, quantity: 1 }] }).then(data => {
      NotificationManager.success(data);
      reload()
    })
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
            <TabBlockMain {...{ product, comments, reviews, reviewItem }} />
            <h3 className="mb-5 mt-6">Related Posts</h3>
            {/*Related Posts*/}
            <SliderBlock product={product} />
            {/*/Related Posts*/}
          </div>
          {/*Right Side Content*/}
          <div className="col-xl-4 col-lg-4 col-md-12">
            <Sidebar {...{ product, addToCart }} />
          </div>
          {/*Rightside Content*/}
        </div>
      </div>
    </section>
  );
};

export default PageDetailsBody;
