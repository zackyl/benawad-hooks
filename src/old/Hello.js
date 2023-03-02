import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
import useMeasure from "./useMeasure";

function Hello() {
  // useEffect(() => {
  //   console.log("render hello");
  //   return () => console.log("unmount hello");
  // });
  // const renders = useRef(0);
  // console.log("hello renders:", renders.current++);

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  const { loading, data } = useFetch(`http://numbersapi.com/${count}`);

  // const [rect, setRect] = useState({});
  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}> {loading ? "loading..." : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>increment</button>
      </div>
      <div>count: {count}</div>
    </div>
  );
}

export default Hello;
