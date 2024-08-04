import React from 'react'

const LoadingSpinner = ({
    width = "100px",
    height = "100px",
    animateDuration = "2s",
    outerColor ="#284849",
    innerColor = "#f1d537"
  }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          strokeWidth="8"
          stroke={outerColor}
          strokeDasharray="50.26548245743669 50.26548245743669"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur={animateDuration}
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
        <circle
          cx="50"
          cy="50"
          r="23"
          strokeWidth="8"
          stroke={innerColor}
          strokeDasharray="36.12831551628262 36.12831551628262"
          strokeDashoffset="36.12831551628262"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur={animateDuration}
            values="0 50 50;-360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    )
}

export default LoadingSpinner;