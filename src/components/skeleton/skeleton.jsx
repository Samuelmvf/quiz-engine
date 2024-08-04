import React from 'react';
import './skeleton.scss';

const Skeleton = ({ width, height }) => {
  return (
    <div
      className="skeleton"
      style={{ width: width || '100%', height: height || '100%' }}
    ></div>
  );
};

export default Skeleton;
