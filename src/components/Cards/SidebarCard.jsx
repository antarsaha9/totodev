import React from 'react'
 
const SidebarCard = ({className,title,listItems,more,...rest})=>{
return(
<>
<div className={`card ${className}`}>
                    <div className="card-header">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="card-body pb-2">
                        {listItems? <ul className="list-unstyled widget-spec vertical-scroll mb-0">
                            {listItems.map(({item},index) => {
                                return(
                                    <li key={index + item}>
                                        <i className="fa fa-check text-success" aria-hidden="true"></i>{item}
                                     </li>
                                )
                            })}
                           {more?  <li className="ml-5 mb-0">
                      <a href="/"> View more..</a>
                    </li>:null}
                        </ul>:null}
                        
                    </div>
                </div>
</>
)
}
export default  SidebarCard;

