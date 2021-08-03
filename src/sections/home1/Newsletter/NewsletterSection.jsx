import React from 'react'
import Image from 'next/image'
 import Icon from "../../../assets/images/png/document.png"
const NewsletterSection = ()=>{
return(
<section className="sptb section-bg-background-color">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center d-block mx-auto text-white">
        <div className="newsimg mx-auto">
          <Image src={Icon} alt="img" placeholder="blur"/>
        </div>
        <h2>Subscribe Our Newsletter</h2>
        <p className="fs-16 text-white-50">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
        <div className="input-group sub-input mt-1">
          <input type="text" className="form-control input-lg border-0" placeholder="Enter your Email" />
          <div className="input-group-append ">
            <button type="button" className="btn ripple  btn-secondary btn-lg br-tr-3 br-br-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}

export default  NewsletterSection;