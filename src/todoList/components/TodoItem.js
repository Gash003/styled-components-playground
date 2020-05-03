import React from 'react';

export const TodoItem = ({label, value}) => (
    <li>
        <input readOnly type="checkbox" checked={value} />
        <label>{label}</label>
    </li>
);
