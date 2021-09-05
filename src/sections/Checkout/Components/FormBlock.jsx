import React from 'react'
import SelectBox from './SelectBox'
 
const FormBlock=()=>{
return(
    <form action="/">
        <div className="row">
    <div className="col-sm-6 col-md-6">
      <div className="form-group">
        <label className="form-label">First Name <span className="text-red">*</span></label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>
    </div>
    <div className="col-sm-6 col-md-6">
      <div className="form-group">
        <label className="form-label">Last Name <span className="text-red">*</span></label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>
    </div>
    <div className="col-md-12">
      <div className="form-group">
        <label className="form-label">Company Name <span className="text-red">*</span></label>
        <input type="text" className="form-control" placeholder="Company name" />
      </div>
    </div>
    <div className="col-md-12">
      <div className="form-group">
        <label className="form-label">Email address <span className="text-red">*</span></label>
        <input type="email" className="form-control" placeholder="Email" />
      </div>
    </div>
    <div className="col-md-12">
      <div className="form-group" data-select2-id={8}>
        <label className="form-label">Country <span className="text-red">*</span></label>
        <SelectBox defaultValue="--Select--" data={["Germany","Canada","Usa","Aus"]}/>
        {/* <select className="form-control select2 select2-hidden-accessible" data-select2-id={1} tabIndex={-1} aria-hidden="true">
          <option value={0} data-select2-id={3}>--Select--</option>
          <option value={1} data-select2-id={9}>Germany</option>
          <option value={2} data-select2-id={10}>Canada</option>
          <option value={3} data-select2-id={11}>Usa</option>
          <option value={4} data-select2-id={12}>Aus</option>
        </select><span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id={2} style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-oz2e-container"><span className="select2-selection__rendered" id="select2-oz2e-container" role="textbox" aria-readonly="true" title="--Select--">--Select--</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span> */}
      </div>
    </div>
    <div className="col-md-12">
      <div className="form-group">
        <label className="form-label">Address <span className="text-red">*</span></label>
        <input type="text" className="form-control" placeholder="Home Address" />
      </div>
    </div>
    <div className="col-sm-6 col-md-6">
      <div className="form-group">
        <label className="form-label">City <span className="text-red">*</span></label>
        <input type="text" className="form-control" placeholder="City" />
      </div>
    </div>
    <div className="col-sm-6 col-md-6">
      <div className="form-group">
        <label className="form-label">Postal Code <span className="text-red">*</span></label>
        <input type="number" className="form-control" placeholder="ZIP Code" />
      </div>
    </div>
  </div>
    </form>
)
}

export default  FormBlock;