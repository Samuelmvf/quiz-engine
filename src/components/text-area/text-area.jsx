import { forwardRef } from "react";
import './text-area.scss';

const TextArea = forwardRef(function ({ placeholder, height, ...props }, textAreaRef) {
  return (
    <textarea
      ref={textAreaRef}
      className="textarea"
      style={{ height }}
      placeholder={placeholder}
      {...props}
    />
  );
});

export default TextArea;