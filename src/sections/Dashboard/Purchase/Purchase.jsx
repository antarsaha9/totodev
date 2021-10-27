import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductSortBlock from "./components/ProductSortBlock";
import ProductRowHead from "~components/Widgets/ProductRowTwo/Head";
import ProductRow from "~components/Widgets/ProductRowTwo";
import productData from "./data";
import Pagination from "../../../components/Pagination";
import { getPurchasedItems, getDownloadUrl } from "~services/purchaseService";
import Loader from "~components/Loader";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import { downloadItem } from "src/helper";
const PurchaseSection = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
    token: null
  });

  useEffect(() => {
    getPurchasedItems({
      limit: pagination.itemsPerPage,
      page_number: pagination.currentPage
    }).then(data => {
      const pgn = {
        ...pagination,
        token: data?.next_token,
        totalItems: data?.count,
        totalPages: Math.ceil(data?.count / pagination.itemsPerPage),
      };
      var pl = {};
      Array.from({ length: pgn.totalPages }, (_, i) => pl[i + 1] = false);
      pl[1] = data?.data || [];
      setProductList(pl);
      setPagination(pgn);
    })
  }, []);

  const handlePageChange = function ({ selected }) {
    const page_number = selected + 1;
    if (productList[page_number]) {
      setPagination({
        ...pagination,
        currentPage: page_number
      });
    }
    else {
      const prevData = productList;
      setProductList({ ...prevData, [page_number]: { loading: true } });
      setPagination({
        ...pagination,
        currentPage: page_number
      });
      getPurchasedItems({
        next_token: pagination.token,
        page_number: page_number,
        limit: pagination.itemsPerPage
      }).then((data) => {
        setProductList({ ...prevData, [page_number]: (data?.data || []) });
      })
    }
  }
  const rows = productList?.[pagination.currentPage] || { loading: true };

  return (
    <>
      <Container className="spb">
        {/* <Loader show={loading} /> */}
        <div className="mb-5">
          <ProductSortBlock count={pagination.totalItems} />
        </div>
        <div className="card manged-ad">
          <ProductRowHead />

          {(rows === null || rows.loading) ? <LoaderSpinner /> : rows.map(
            (order, index) => {
              const { item_name, image_url, item_id, total_item_cost, category_name, purchase_date, rating } = order;
              return (
                <ProductRow
                  title={item_name}
                  image={image_url}
                  tag={category_name}
                  price={total_item_cost}
                  key={index + "tr"}
                  date={purchase_date}
                  item_id={item_id}
                  rating={rating}
                  downloadItem={(cb) => downloadItem(order, cb)}
                />
              );
            }
          )}
        </div>
        <Pagination pageCount={pagination.totalPages} onPageChange={handlePageChange} />
      </Container>
    </>
  );
};

export default PurchaseSection;
