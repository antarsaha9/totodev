import React from "react";
import FeatureCard from "../../../components/Cards/FeatureCard";

const FeatureSection = () => {
  return (
    <section>
      <div className="section-bg-background-color cover-image">
        <div className="container">
          <div className="row no-gutters row-deck text-white">
            <div className="col-md-4">
              <FeatureCard
                title="Quality Products"
                iconClass="fe fe-airplay"
                text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam"
                className="bg-dark-transparent01"
              />
            </div>

            <div className="col-md-4">
              <FeatureCard
                title="Best Seurity"
                iconClass="fe fe-thumbs-up"
                text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam"
                className="mt-5 mt-md-0"
              />
            </div>
            <div className="col-md-4">
            <FeatureCard
                title="24/7 Customer Support"
                iconClass="fe fe-headphones"
                text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam"
                className="mt-5 mt-md-0 bg-dark-transparent01"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default  FeatureSection;