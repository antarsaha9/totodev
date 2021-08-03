import React from 'react'
 
const BreadcrumbSectionThree =({title,number})=>{
return(
<>
  <div className="sptb-5">
    <div className="header-text1 mb-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-12 col-md-12 d-block mx-auto">
            <div className="text-center text-white text-property mb-4">
              <h1>{number? <span>{number}</span>:null} {title}</h1>
            </div>
            <div className="row">
              <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
                <div className="search-form">
                  <input type="text" className="form-control input-lg" id="text4" placeholder="Search Product....." />
                  <button className="btn ripple "><i className="fe fe-search" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* /header-text */}
  </div>


</>
)
}
export default  BreadcrumbSectionThree;