import React from "react";

const SingleTableRow = () => {
  return (
    <tr>
      <td>#INV-986</td>
      <td>Angular Template</td>
      <td>18-11-2019</td>
      <td className="fs-16">$378</td>
      <td>07-12-2019</td>
      <td>
        <a
          className="btn ripple  btn-primary btn-sm text-white mb-1"
          data-toggle="tooltip"
          data-original-title="View"
        >
          <i className="fa fa-eye"></i>
        </a>
          <a
            className="btn ripple  btn-secondary btn-sm text-white mb-1"
            data-toggle="tooltip"
            data-original-title="Delete"
          >
            <i className="fa fa-trash-o"></i>
          </a>
            <br />
      </td>
    </tr>
  );
};

const PaymentTable = () =>{
  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">Payments</h3>
      </div>
      <div className="card-body">
        <div className="table-responsive border-top">
          <table className="table table-bordered table-hover text-nowrap">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Category</th>
                <th>Purchase Date</th>
                <th>Price</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <SingleTableRow invoice="#INV-348" category="HTML Template" purchaseDate="07-12-2019" price="$18" dueDate="17-12-2019"/>
                <SingleTableRow invoice="#INV-186" category="Listing Template" purchaseDate="02-12-2019" price="$14,276" dueDate="14-12-2019"/>
                <SingleTableRow invoice="#INV-831" category="Busniess Template" purchaseDate="30-11-2019" price="$25,000" dueDate="	04-12-2019"/>
                <SingleTableRow invoice="#INV-672" category="Corporate Template" purchaseDate="25-18-2019" price="$50.00" dueDate="	04-12-2019"/>
                <SingleTableRow invoice="#INV-428" category="Spa Template" purchaseDate="24-11-2019" price="$99.99" dueDate="11-12-2019"/>
                <SingleTableRow invoice="#INV-543" category="Wordpress Template" purchaseDate="22-11-2019" price="$145" dueDate="12-12-2019"/>
                <SingleTableRow invoice="#INV-986" category="Angular Template" purchaseDate="18-11-2019" price="$378" dueDate="07-12-2019"/>

            </tbody>
          </table>
        </div>
        <ul className="pagination">
          <li className="page-item page-prev disabled">
            <a className="page-link" href="#" tabIndex="{-1}">
              Prev
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item page-next">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default  PaymentTable;