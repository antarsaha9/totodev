import React from "react";
import CounterWidget from "../../../components/Widgets/CounterWidgets";
import CounterData from "./data"


const FactSection = () => {
  return (
    <>
      <section>
        <div className="about-1 cover-image sptb section-bg-background-color1">
          <div className="content-text mb-0 text-white info">
            <div className="container">
              <div className="row text-center">
                  {CounterData.map(({title,text,iconClass,count},index)=>{
                      return(
                        <div className="col-lg-3 col-md-6" key={index + "fcu"}>
                        <CounterWidget
                            title={title}
                            count={count}
                            iconClass={iconClass}
                            text={text}
                        />
                        </div>
                      )
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FactSection;
