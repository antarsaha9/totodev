import React from 'react'
 
const FeatureCard =({className,iconClass,title,text,...rest})=>{
return(
<div className={`p-5${className && " " + className}`}>
<div className="card-body text-center">
    <div className="widgets-cards-icons">
    <div className="wrp counter-icon1 mr-5">
        <i className={iconClass} />
    </div>
    </div>
    <h6 className="card-title mb-4">{title}</h6>
    <p className="text-white-80">{text}</p>
</div>
</div>
)
}
export default  FeatureCard;