import React from 'react'
const BreadcrumbSectionOne =({title,text,...rest})=>{
return(
<>
  <div className="container">
    <div className="text-center text-white mb-6">
      <h1 className="mb-1">{title}</h1>
      <p className="mb-0">{text}</p>
    </div>
    <div className="row mb-5">
      <div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
        <div className="search-form">
          <input type="text" className="form-control input-lg keywords-input" id="text4" placeholder="Search Product....." />
          <button className="btn ripple "><i className="fe fe-search" /></button>
        </div>
      </div>
    </div>
    <h2 className="text-center mb-0 font-weight-light"><span className="font-weight-semibold">45,789</span> HTML Templates From <span className="font-weight-semibold">$1</span></h2>
  </div>
</>
)
}
export default  BreadcrumbSectionOne;