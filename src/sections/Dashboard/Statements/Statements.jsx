import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import StatementsRowHead from "./components/Head";
import ProductList from "./components/StatementsList";
import Pagination from "../../../components/Pagination";
import { getStatement } from "~services/purchaseService";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
const StatementsSection = () => {
  const [statement, setStatement] = useState([]);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 10,
    currentPage: 1,
    token: null
  });
  useEffect(() => {
    setStatement({ loading: true });
    getStatement({
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
      setStatement(pl);
      setPagination(pgn);
    });
  }, []);

  const handlePageChange = function ({ selected }) {
    const page_number = selected + 1;
    if (statement[page_number]) {
      setPagination({
        ...pagination,
        currentPage: page_number
      });
    }
    else {
      const prevData = statement;
      setStatement({ ...prevData, [page_number]: { loading: true } });
      setPagination({
        ...pagination,
        currentPage: page_number
      });
      getStatement({
        next_token: pagination.token,
        page_number: page_number,
        limit: pagination.itemsPerPage
      }).then((data) => {
        setStatement({ ...prevData, [page_number]: (data?.data || []) });
      })
    }
  }

  const rows = statement?.[pagination.currentPage] || { loading: true };
  return (
    <>
      <Container className="spb">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Statements List</h3>
            </div>
            <div className="table-responsive statement-card">
              <table className="table card-table table-vcenter text-nowrap border-bottom">
                <thead>
                  <StatementsRowHead />
                </thead>
                <tbody>
                  {(rows === null || rows.loading) ? <LoaderSpinner /> : rows.map(
                    (
                      {
                        order_number,
                        category_name,
                        date,
                        first_name,
                        last_name,
                        type,
                        total_item_cost,
                        purchase_status,
                      },
                      index
                    ) => {
                      var badgeClasstype = "", badgeClassstatus = "";
                      if (type == 'SALE')
                        badgeClasstype = "info"
                      else if (type == 'PURCHASE')
                        badgeClasstype = "success"

                      if (purchase_status == 'DONE')
                        badgeClassstatus = "primary"
                      else
                        badgeClassstatus = "danger"

                      return (
                        <ProductList
                          id={order_number}
                          category={category_name}
                          date={date}
                          author={`${first_name} ${last_name}`.trim()}
                          type={type}
                          price={total_item_cost}
                          status={purchase_status}
                          badgeClasstype={badgeClasstype}
                          badgeClassstatus={badgeClassstatus}
                          key={index + "tr"}
                        />
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
            <div className="card-body mr-auto">
              <Pagination pageCount={pagination.totalPages} onPageChange={handlePageChange} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StatementsSection;
