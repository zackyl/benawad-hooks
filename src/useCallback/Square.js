import React, { useRef } from "react";
import useCountRenders from "./useCountRenders";

function Square({ n, increment }) {
  // console.log(onClick);
  useCountRenders();
  return <button onClick={() => increment(n)}>{n}</button>;
}

export default React.memo(Square);
