import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import StatementsRowHead from "./components/Head";
import ProductList from "./components/StatementsList";
import Pagination from "../../../components/Pagination";
import { getStatement } from "~services/purchaseService";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
const StatementsSection = () => {
  const [statement, setStatement] = useState([]);

  useEffect(() => {
    setStatement({ loading: true });
    getStatement().then(data => {
      setStatement(data?.data || []);
    });
  }, []);
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
                  {(statement === null || statement.loading) ? <LoaderSpinner /> : statement.map(
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
              <Pagination count="3" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StatementsSection;
