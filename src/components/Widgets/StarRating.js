import React, { useEffect, useState } from "react";


function StarRating(props) {
  const { rating, editable = true, onChange, ...restProps } = props;

  const [hoverd_stars, setHoverdStars] = useState(null);
  const [ishovering, setIsHovering] = useState(false);
  const active_stars = (ishovering ? hoverd_stars : rating) || 0;
  const cursorProperty = editable ? "pointer" : "default";

  function handleHover(e) {
    const component = e.target;
    setIsHovering(true);
    setHoverdStars(component.getAttribute('data'))
  }

  function handleHoverOut() {
    setIsHovering(false)
  }
  function handleClick(e) {
    onChange(e.target.getAttribute('data'))
  }
  return (<>
    {/* <input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" defaultValue={active_stars} /> */}
    {active_stars <= 5 ? (
      <>
        <div className="rating-stars-container mr-2" style={{ cursor: cursorProperty }} {...(editable ? { onMouseLeave: handleHoverOut } : {})} >
          {Array.from(Array(Number(5)), (_, index) => {
            const t = index + 1;
            return <Star {...restProps} active={active_stars >= t} key={t + "pcstr2"} data={t} isHovering={ishovering} {...(editable ? { onMouseOver: handleHover, onClick: handleClick } : {})} style={{ cursor: cursorProperty }} />
          })}
        </div>
      </>
    ) : null}
  </>)
}

function Star({ active, isHovering, data, starSize = 'sm', style, ...args }) {
  return (
    <div className={`rating-star ${starSize} ${active ? " is--active" : ""}${isHovering ? (active ? " is--hover" : " is--no-hover") : ""}`} style={style} >
      <i className="fa fa-star" data={data} {...args}></i>
    </div>
  )
}
// help taken from
// https://codepen.io/benjaminreid/pen/vNVwPW
export default StarRating;
