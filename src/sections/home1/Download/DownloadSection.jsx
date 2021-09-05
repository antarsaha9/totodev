import React from 'react'

const DownloadSection = ()=>{
return(
<section className="sptb">
  <div className="container">
    <div className="section-title center-block text-center">
      <h2>Download</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="text-center text-wrap">
          <div className="btn-list">
            <a href="/#" className="btn ripple  btn-primary btn-lg mb-sm-0"><i className="fa fa-apple fa-1x mr-2" /> App Store</a>
            <a href="/#" className="btn ripple  btn-secondary btn-lg mb-sm-0"><i className="fa fa-android fa-1x mr-2" /> Google Play</a>
            <a href="/#" className="btn ripple  btn-info btn-lg mb-0"><i className="fa fa-windows fa-1x mr-2" /> Windows</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}
export default  DownloadSection;