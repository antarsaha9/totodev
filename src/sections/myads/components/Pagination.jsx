import React from 'react'
 
const Pagination =()=>{
return(
<ul className="pagination justify-content-end">
        <li className="page-item page-prev disabled">
          <a className="page-link" href="#" tabIndex={-1}>
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
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item page-next">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
)
}

export default  Pagination;