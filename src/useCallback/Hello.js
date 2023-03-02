import React, { useRef } from "react";
import useCountRenders from "./useCountRenders";

function Hello({ increment }) {
  // useCountRenders();
  return <button onClick={() => increment(5)}>hello</button>;
}

export default React.memo(Hello);
