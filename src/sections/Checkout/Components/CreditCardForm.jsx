import React from 'react'
 
const CreditCardForm = ()=>{
return(
    <form action="/">
        <div className="form-group">
                    <label className="form-label" htmlFor="exampleInputEmail1">CardHolder Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Card number</label>
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search for..." />
                      <span className="input-group-append">
                        <button className="btn btn-info" type="button"><i className="fa fa-cc-visa" /> &nbsp; <i className="fa fa-cc-amex" /> &nbsp;
                          <i className="fa fa-cc-mastercard" /></button>
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="form-group">
                        <label className="form-label">Expiration</label>
                        <div className="input-group">
                          <input type="number" className="form-control" placeholder="MM" name="exp" />
                          <input type="number" className="form-control" placeholder="YY" name="exp" />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label className="form-label">CVV <i className="fa fa-question-circle" /></label>
                        <input type="number" className="form-control" required />
                      </div>
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-block">Confirm</button>
    </form>
)
}

export default  CreditCardForm;