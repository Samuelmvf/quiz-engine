import { forwardRef } from 'react';
import './radio-button.scss';

const RadioButton = forwardRef(function({ label, name, checked, value, onChange, ...props }, ref) {
  return (
    <div className="radio">
      <label className="radio__label">
        <input
          ref={ref}
          type="radio"
          name={name}
          checked={checked}
          value={value}
          onChange={onChange}
          className="radio__input"
          {...props}
        />
        <span className="radio__custom"></span>
        <span className="radio__text">{label}</span>
      </label>
    </div>
  );
});

export default RadioButton;