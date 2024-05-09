import React from 'react';

const SuperSelect = ({defaultValue, value, options, onChange}) => (
    <select value={value} onChange={event => { onChange(event.target.value) }}>
        <option disabled>{defaultValue}</option>
        {options.map(el => <option key={el.value} value={el.value}>{el.text}</option>)}
    </select>
)

export default SuperSelect;