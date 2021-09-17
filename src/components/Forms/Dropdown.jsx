import React from 'react';
import Form from "react-bootstrap/Form";

export default function Dropdown (props) {
    const { data, defaultValue, className = "", ariaLabel, handleChange, name } = props;

    return (
        <Form.Select
            className={"form-control " + className}
            aria-label={ariaLabel}
            value={defaultValue}
            onChange={handleChange}
            name={name}>
            {data.map(c => <option value={c}>{c}</option>)}
        </Form.Select>
    )
}
