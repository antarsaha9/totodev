import React from "react";
import SelectBox from "./components/SelectBox";
import UploadBlock from "./components/UploadBlock";
import SidebarCard from "../../components/Cards/SidebarCard"
const PostBody = ()=> {
  return (
    <>
      <section className="sptb">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8 col-md-12 col-md-12">
              <div className="card mb-xl-0">
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label text-dark">Category</label>
                    <SelectBox data={["HTML","Wordpress","Angular","PHP","PSD","Others"]} filterBox={true}/>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Title"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Features</label>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 col-xs-12 mb-3 mb-xl-0">
                        <input
                          type="text"
                          placeholder="100% Fully Responsive"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 col-xs-12 mb-3 mb-xl-0">
                        <input
                          type="text"
                          placeholder="Bootstrap4 Framework"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          placeholder="W3C Validated"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Description</label>
                    <textarea
                      className="form-control"
                      name="example-textarea-input"
                      rows={6}
                      placeholder="text here.."
                      defaultValue={""}
                    />
                  </div>
                  <UploadBlock/>
                  <div>
                    <div>
                      <div className="form-group">
                        <label className="form-label text-dark">Image1</label>
                        <SelectBox data={["Image2-1","Image1-1"]} defaultValue="Image1"/>
                      </div>
                      <div className="form-group">
                        <label className="form-label text-dark">Image2</label>
                        <SelectBox data={["Image2-1","Image1-1"]} defaultValue="Image2"/>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Tags</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$24"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-dark">Message</label>
                    <textarea
                      className="form-control h-auto"
                      name="example-textarea-input"
                      rows={6}
                      placeholder="text here.."
                    />
                  </div>
                  <div className="custom-controls-stacked">
                    <label className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        name="example-checkbox1"
                        defaultValue="option1"
                      />
                      <span className="custom-control-label">
                        I Agree, et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atcorrupti
                        quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident
                      </span>
                    </label>
                  </div>
                </div>
                <div className="card-footer text-right">
                  <a href="#" className="btn ripple  btn-primary">
                    Submit Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <SidebarCard title="Benefits Of Premium Items" listItems={
                [
                  {
                    item:"Premium Items Active",
                    id:"one"
                  },
                  {
                    item:"Premium ads are displayed on top",
                    id:"two"
                  },
                  {
                    item:"Premium ads will be Show in Google results",
                    id:"three"
                  },
                  {
                    item:"Money Not Refundable",
                    id:"four"
                  },
                ]

              }/>
              <SidebarCard title="Terms And Conditions" more={true} listItems={
                [
                  {
                    item:"Money Not Refundable",
                    id:"one"
                  },
                  {
                    item:"You can renew your Premium ad after experted.",
                    id:"two"
                  },
                  {
                    item:"Premium ads are active for depend on package.",
                    id:"three"
                  }
                ]

              }/>
              <SidebarCard title="Safety Tips For Buyers" more={true} listItems={
                [
                  {
                    item:"Meet Seller at public Plac",
                    id:"one"
                  },
                  {
                    item:"Check item before you buy",
                    id:"two"
                  },
                  {
                    item:"Pay only after collecting item",
                    id:"three"
                  }
                ]

              }/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default  PostBody;