import React from "react";
import { Container } from "react-bootstrap";
import StatementsRowHead from "./components/Head";
import ProductList from "./components/StatementsList";
import productData from "./data";
import Pagination from "../../../components/Pagination";
const StatementsSection = () => {
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
                  {productData.map(
                    (
                      {
                        id,
                        category,
                        date,
                        author,
                        type,
                        price,
                        status,
                        badgeClasstype,
                        badgeClassstatus,
                      },
                      index
                    ) => {
                      return (
                        <ProductList
                          id={id}
                          category={category}
                          date={date}
                          author={author}
                          type={type}
                          price={price}
                          status={status}
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
