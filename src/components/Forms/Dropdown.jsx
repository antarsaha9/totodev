import React, { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import BootstrapDropdown from 'react-bootstrap/Dropdown';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

export default function Dropdown(props) {
  const { data, selected, className = "", ariaLabel, handleChange, name, disabled } = props;
  const CustomToggle = React.forwardRef(({ children, onClick, ...props }, ref) => (
    <InputGroup>
      <Form.Control
        as="button"
        variant="outlined"
        className="text-left border-right-0"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        disabled={disabled}
      >
        {children}
      </Form.Control>
      <InputGroup.Text
        className="border-left-0 bg-transparent">
        {props['aria-expanded'] ? <BsFillCaretUpFill style={{ fontSize: "x-small" }} /> : <BsFillCaretDownFill style={{ fontSize: "x-small" }} />}
      </InputGroup.Text>
    </InputGroup>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={{ ...style, transform: "translate(0px, 40px)", padding: "0px" }}
          className={className}
          aria-labelledby={labeledBy}
        >
          <ul className="list-unstyled">
            {children}
          </ul>
        </div>
      );
    },
  );

  // const [selected, setSelected] = useState('');
  // useEffect(() => { setSelected(defaultValue) }, [defaultValue]);
  return (
    <BootstrapDropdown
      onSelect={e => { handleChange(e) }}
      {...{ name, className }}>
      <BootstrapDropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {selected || ariaLabel || "--Select--"}
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu as={CustomMenu}>
        {data.map(o => <BootstrapDropdown.Item style={{ padding: "6px" }} eventKey={o} active={selected === o}>{o}</BootstrapDropdown.Item>)}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  );
}