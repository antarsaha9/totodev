import React from "react";
import SellImage from "../../../assets/images/svg/1.svg";
import BuyImage from "../../../assets/images/svg/2.svg";
import ServiceCard from "../../../components/Cards/ServiceCard";
const ServiceSection = ()=> {
  return (
    <section className="sptb">
      <div className="container ">
        <div className="row marketplace-section">
          <div className="col-md-6">
            <ServiceCard
              image={SellImage}
              title="Sell Products"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiishic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              btn="secondary"
            />
          </div>
          <div className="col-md-6">
            <ServiceCard
              image={BuyImage}
              title="Sell Products"
              text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiishic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              btn="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default  ServiceSection;