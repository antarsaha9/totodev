import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductSortBlock from "./components/ProductSortBlock";
import ProductRowHead from "~components/Widgets/ProductRowTwo/Head";
import ProductRow from "~components/Widgets/ProductRowTwo";
import productData from "./data";
import Pagination from "../../../components/Pagination";
import { getPurchasedItems, getDownloadUrl } from "~services/purchaseService";
import Loader from "~components/Loader";
const PurchaseSection = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const downloadItem = function (order) {
    console.log(order);
    getDownloadUrl({ item_id: order.item_id, order_id: order.order_number }).then(res => {
      var link = document.createElement("a");
      link.download = order.item_name;
      link.href = res.url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  }

  useEffect(() => {
    getPurchasedItems().then(data => {
      setProductList(data?.data || []);
      setLoading(false);
    })
  }, []);
  return (
    <>
      <Container className="spb">
        <Loader show={loading} />
        <div className="mb-5">
          <ProductSortBlock />
        </div>
        <div className="card manged-ad">
          <ProductRowHead />

          {productList.map(
            (order, index) => {
              const { item_name, image_url, item_id, total_item_cost, category_name, purchase_date } = order;
              return (
                <ProductRow
                  title={item_name}
                  image={image_url}
                  tag={category_name}
                  price={total_item_cost}
                  key={index + "tr"}
                  date={purchase_date}
                  item_id={item_id}
                  downloadItem={() => downloadItem(order)}
                />
              );
            }
          )}
        </div>
        <Pagination />
      </Container>
    </>
  );
};

export default PurchaseSection;
