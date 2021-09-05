import React from 'react'
 import SingleRow from './Components/SingleRow'
 import cartImage from "../../assets/images/media/pictures/small/01.jpg"
const CardtBody = ()=>{
return(
<section className="sptb">
  <div className="container">
    <div className="row">
      <div className="col-xl-12 col-lg-12 col-md-12">
        <div className="card cart mb-0">
          <div className="card-header">
            <h3 className="card-title">Shopping Cart</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered table-vcenter text-nowrap border-top">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th className="w-25">Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <SingleRow title="HTML Templates" price="$15" image={cartImage}/>
                  <SingleRow title="Wordpress Templates" price="$32" image={cartImage}/>
                  <SingleRow title="Angular Templates" price="$21" image={cartImage}/>
                </tbody>
              </table>
            </div><br />
            <div className="row">
              <div className="col-6"><input className="productcart form-control" type="text" placeholder="Coupon Code" /></div>
              <div className="col-6"><a href="#" className="btn btn-primary btn-md">Apply Coupon</a></div>
            </div><br />
            <div className="mt-3">
              <ul className="list-group">
                <li className="list-group-item">
                  Sub Total
                  <span className="badgetext h4 font-weight-bold mb-0">$68.00</span>
                </li>
                <li className="list-group-item">
                  Discount
                  <span className="badgetext h4 font-weight-bold mb-0">2%</span>
                </li>
                <li className="list-group-item">
                  Shipping
                  <span className="badgetext h4 font-weight-normal mb-0">Free</span>
                </li>
                <li className="list-group-item">
                  Total
                  <span className="badgetext h4 font-weight-bold1 fs-22 mb-0">$48.00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="card-footer text-right">
            <a href="#" className="btn btn-primary"><i className="fa fa-arrow-left mr-1" />Continue Shopping</a>
            <a href="checkout.html" className="btn btn-success">Check out<i className="fa fa-arrow-right ml-1" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}

export default CardtBody;