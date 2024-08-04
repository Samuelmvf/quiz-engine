import React from 'react';
import './radio-button.scss';

const RadioButton = ({ label, name, checked, onChange }) => {
  return (
    <div className="radio">
      <label className="radio__label">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          className="radio__input"
        />
        <span className="radio__custom"></span>
        <span className="radio__text">{label}</span>
      </label>
    </div>
  );
};

export default RadioButton;