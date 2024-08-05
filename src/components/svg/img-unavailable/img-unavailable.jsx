import React from 'react';

const ImgUnavailable = ({ color = '#000', width = 200, height = 200 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <rect width="100%" height="100%" fill="none" />
      <path d="M 30 160 L 30 40 L 170 40 L 170 160 Z" stroke={color} strokeWidth="4" fill="none" />
      <path d="M 30 130 L 90 70 L 130 110 L 150 90 L 170 110" stroke={color} strokeWidth="4" fill="none" />
      <circle cx="150" cy="60" r="5" fill={color} />
      <text
        x="100"
        y="180"
        fontFamily="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={color}
      >
        NO IMAGE
      </text>
      <text
        x="100"
        y="195"
        fontFamily="Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        fill={color}
      >
        AVAILABLE
      </text>
    </svg>
  );
};

export default ImgUnavailable;
