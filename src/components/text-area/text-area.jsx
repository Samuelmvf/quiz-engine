import React from 'react';
import './text-area.scss';

const TextArea = ({ value, onChange, placeholder, height, maxLength = 2000 }) => {
  return (
    <textarea
      className="textarea"
      style={{ height }}
      placeholder={placeholder}
      value={value}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
};

export default TextArea;