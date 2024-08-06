import React from 'react';
import './button.scss'

function Button({ text, type, ...props }) {

    return (
        <button className="button" type={type} {...props}>
            {text}
        </button>
    );
}

export default Button;
