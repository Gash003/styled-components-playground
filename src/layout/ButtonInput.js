import React from 'react';

export const ButtonInput = ({inputValue, onInputChange, buttonLabel, onButtonClick}) => {
    return (
        <>
            <input type="text" value={inputValue} onChange={onInputChange} />
            <button onClick={onButtonClick}>{buttonLabel}</button>
        </>
    );
};
