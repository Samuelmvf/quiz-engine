import React from 'react';
import './check-box.scss';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="checkbox__input"
        />
        <span className="checkbox__custom"></span>
        <span className="checkbox__text">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;