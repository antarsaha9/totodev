
import React from 'react'
import Image from 'next/image'
 
const ServiceCard = ({title,text,btn,image})=>{
return(
    <div className="card mb-lg-0 service-widgets1">
        <div className="text-center card-body">
        <div className="product-imgs">
            <Image src={image} alt="service"/>
        </div>
        <h3 className="mt-3 mb-2">{title}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiishic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <a href="/#" className={`btn ripple ${btn ? " btn-"+ btn : ""}`}>Become Author</a>
        </div>
    </div>
)
}
export default  ServiceCard;

