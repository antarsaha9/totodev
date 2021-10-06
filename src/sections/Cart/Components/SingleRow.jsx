import React from "react";
import Image from "next/image"
const SingleRow =({image,title,price}) =>{
    const [count, setCount] = React.useState(0);
    // const uinpt =  React.useRef()
  return (
    <tr>
      <td>
        {/* <div className="h-8 "> */}
        <Image
          src={image}
          alt="cart-image"
          layout="fixed"
          width="64"
          height="64"
          className="br-4"
          // placeholder="blur"
        />
        {/* </div> */}
      </td>
      <td>{title}</td>
      <td className="font-weight-bold fs-16">{price}</td>
      {/* <td>
        <div className="input-group input-indec">
          <span className="input-group-btn">
            <button onClick={() => !(count === 0) ? setCount(count - 1) :0} 
                className="quantity-left-minus btn btn-light btn-number br-0"
                data-type="minus">
              <i className="fa fa-minus" />
            </button>
          </span>
          <input
            type="text"
            name="quantity"
            className="form-control input-number text-center"
            value={count}
            // ref={uinpt}
            readOnly={true}
          />
          <span className="input-group-btn">
            <button onClick={() => setCount(count + 1)} 
                type="button"
              className="quantity-right-plus btn btn-light btn-number br-0">
              <i className="fa fa-plus" />
            </button>
          </span>
        </div>
      </td> */}
      <td>
        <a
          href="/#"
          className="btn btn-danger btn-sm mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Save for Washlist"
        >
          <i className="icon icon-heart" />
        </a>
        <a
          href="/#"
          className="btn btn-info btn-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="Remove"
        >
          <i className="icon icon-trash" />
        </a>
      </td>
    </tr>
  );
}
export default  SingleRow;