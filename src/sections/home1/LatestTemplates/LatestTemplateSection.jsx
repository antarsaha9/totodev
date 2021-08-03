import React from "react";
import styled from "styled-components";

import SliderBlock from "./Components/SliderBlock";

const LatestTemplateSection = () =>{
  
  return (
    <section className="sptb">
      <div className="container">
        <div className="section-title center-block text-center">
          <h2>Latest Templates</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <SliderBlock/>
      </div>
    </section>
  );
}

export default  LatestTemplateSection;