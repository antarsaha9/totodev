import React from "react";
import CountUp from "react-countup";
 const CounterWidget = ({ title, iconClass, count }) => {
  return (
      <div className="counter-status status md-mb-0">
        <div className="counter-icon text-success">
            <i className={iconClass} />
        </div>
          <h5 className="font-weight-normal">{title}</h5>
          <h2 className="counter mb-0">
            <CountUp start={0} end={Number(count)} />
          </h2>
      </div>
  );
}


export default CounterWidget 