import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, activeItem = "2", onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"page-item"}
      breakLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={"pagination justify-content-end"}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-next"
      previousClassName="page-prev"
      activeClassName="active"
      disabledClassName="disabled"
    />
  );
};

export default Pagination;
