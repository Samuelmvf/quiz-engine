import React, { useState, useEffect } from 'react';

import Skeleton from "@/components/skeleton/skeleton.jsx";
import ImgUnavailable from "@/components/svg/img-unavailable/img-unavailable.jsx";

const LazyImg = ({ url, alt, height, width, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = url;

    img.onload = () => {
      setIsLoading(false);
      setHasError(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [url]);

  if (isLoading) {
    return <Skeleton height={height} width={width} />;
  }

  if (hasError) {
    return <ImgUnavailable height={height} width={width} />;
  }

  return (
    <img
      src={url}
      alt={alt}
      style={{ height, width, borderRadius: "0.250rem" }}
      {...props}
    />
  );
};

export default LazyImg;
