import React from "react";
import { parseISO, format } from 'date-fns'
import { Badge } from "react-bootstrap";

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
        <span className="text-primary">{id}</span>
      </td>
      <td>{category}</td>
      <td>{format(parseISO(date), 'dd-MM-yyyy')}</td>
      <td className="font-weight-semibold fs-16"> {author}</td>
      <td>
        <Badge classNamee={`badge ${badgeClasstype}`} variant={badgeClasstype}>
          {type}
        </Badge>
      </td>
      <td className="font-weight-semibold fs-18">{price}</td>
      <td>
        <Badge classNamee={`badge ${badgeClassstatus}`} variant={badgeClassstatus}>
          {status}
        </Badge>
      </td>
    </tr>
  );
};
export default ProductList;
