import React, { useState, useEffect } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { BsFillCaretDownFill } from "react-icons/bs";

export default function _dropdown(props) {
    const { data, defaultValue, className = "", ariaLabel, handleChange, name } = props;
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
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
            >
                {children}
            </Form.Control>
            <InputGroup.Text
                className="border-left-0 bg-transparent"
                id="basic-addon2">
                <BsFillCaretDownFill style={{fontSize:"x-small"}} />
            </InputGroup.Text>
        </InputGroup>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    const [selected, setSelected] = useState('');
    useEffect(() => { setSelected(defaultValue) }, [defaultValue]);

    return (
        <Dropdown
            onSelect={e => { setSelected(e); handleChange(e) }}
            {...{ name, className }}>
            <Dropdown.Toggle variantt="select" as={CustomToggle} id="dropdown-custom-components">
                {selected || "--Select--"}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu}>
                {data.map(o => <Dropdown.Item eventKey={o} active={selected === o}>{o}</Dropdown.Item>)}
            </Dropdown.Menu>
        </Dropdown>
    );
}