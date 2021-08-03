import React from 'react'
 
const BreadCrumbSection = ()=>{
return(
<section className="cover-image bg-background3">
    <div className="bannerimg">
        <div className="header-text mb-0">
  <div className="container">
    <div className="text-center text-white">
      <h1>Register</h1>
      <ol className="breadcrumb text-center">
        <li className="breadcrumb-item"><a href="/">Home</a></li>
        <li className="breadcrumb-item"><a href="#" className="pointer-none">Pages</a></li>
        <li className="breadcrumb-item active text-white" aria-current="page">Register</li>
      </ol>
    </div>
  </div>
</div>
    </div>
</section>
)
}
export default  BreadCrumbSection;