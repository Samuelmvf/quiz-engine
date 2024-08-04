import React from 'react';
import './button.scss'

function Button({ text, onClick, ...props }) {

    return (
        <button className="button" onClick={onClick} {...props}>
            {text}
        </button>
    );
}

export default Button;
