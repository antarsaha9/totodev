import React from "react";

const ProductList = ({
  id,
  category,
  date,
  author,
  price,
  type,
  status,
  badgeClasstype,
  badgeClassstatus,
}) => {
  return (
    <tr>
      <td>
        <a href="/" className="text-primary">
          {id}
        </a>
      </td>
      <td>{category}</td>
      <td>{date}</td>
      <td className="font-weight-semibold fs-16"> {author}</td>
      <td>
        <a href="#" className={`badge ${badgeClasstype}`}>
          {type}
        </a>
      </td>
      <td className="font-weight-semibold fs-18">{price}</td>
      <td>
        <a href="/" className={`badge ${badgeClassstatus}`}>
          {status}
        </a>
      </td>
    </tr>
  );
};
export default ProductList;
