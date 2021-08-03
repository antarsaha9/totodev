

import React,{useContext} from 'react'
import {useAccordionToggle,AccordionContext} from 'react-bootstrap'


const AccordionTrigger = ({className, children, eventKey, callback }) =>{
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        className={`${className} ${isCurrentEventKey ? 'active' : ''}`}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }


  export default  AccordionTrigger;