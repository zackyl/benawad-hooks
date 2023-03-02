import React, { useRef } from "react";

function useCountRenders() {
  const renders = useRef(0);

  console.log("renders: ", renders.current++);
}

export default useCountRenders;
