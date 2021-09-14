import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// const RenderTooltip = (props) => {
//     return(
//         <Tooltip id={props.id} {...props}>
//         {props.tip}
//         </Tooltip>
//     )
// }

const TooltipTop = (props) => {
    // const [show, setShow] = React.useState(false);
    // const [target, setTarget] = React.useState(null);
    // const ref = React.useRef(null);
  
    // const handleClick = (event) => {
    //   setShow(!show);
    //   setTarget(event.target);
    // };
  
  return (
    <OverlayTrigger overlay={<Tooltip id={props.children}>{props.tip}</Tooltip>}>
       <a href="/#" className={`d-inline-block ${props.className && " " + props.className}`}>
       {props.children}
       </a>
    </OverlayTrigger>
  );
};

export default TooltipTop;
