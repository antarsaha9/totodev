import React from 'react'
 
const Pagination =({count="5",activeItem="2"})=>{
return(
<ul className="pagination justify-content-end">
        <li className="page-item page-prev disabled">
          <a className="page-link" href="#" tabIndex={-1}>
            Prev
          </a>
        </li>
          {Array.from(Array(Number(count)), (_, index) => {
            return (
              <li className={`page-item ${index + 1 === Number(activeItem) ? "active" : ""}`} key={index + "pg"}>
                <a className="page-link" href="#">
                  {index + 1 }
                </a>
              </li>
            )
          })}
        
        <li className="page-item page-next">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
)
}

export default  Pagination;