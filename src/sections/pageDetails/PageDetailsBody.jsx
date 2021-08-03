import React from 'react'
import ProductOverviewCard from './Components/Sidebar/ProductOverviewCard'
import Sidebar from './Components/Sidebar/Sidebar'
import SliderBlock from './Components/SliderBlock'
import TabBlockMain from './Components/TabBlock/TabBlockMain'

 
const PageDetailsBody =()=>{
return(
<section className="sptb">
  <div className="container">
    <div className="row">
      <div className="col-xl-8 col-lg-8 col-md-12">
        <ProductOverviewCard/>
        <TabBlockMain/>
        <h3 className="mb-5 mt-6">Related Posts</h3>
        {/*Related Posts*/}
        <SliderBlock/>
        {/*/Related Posts*/}
      </div>
      {/*Right Side Content*/}
      <div className="col-xl-4 col-lg-4 col-md-12">
       <Sidebar/>
      </div>
      {/*Rightside Content*/}
    </div>
  </div>
</section>
)
}

export default  PageDetailsBody;