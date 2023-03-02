import React, { useLayoutEffect, useRef, useState } from "react";

const useMeasure = (data) => {
  const ref = useRef();

  const [rect, setRect] = useState({});
  useLayoutEffect(() => {
    setRect(ref.current.getBoundingClientRect());
  }, [...data, ref]);

  return [rect, ref];
};

export default useMeasure;
