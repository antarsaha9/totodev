import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount = "5", activeItem = "2", onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"prev"}
      nextLabel={"next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={(page) => {
        console.log(page);
      }}
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
