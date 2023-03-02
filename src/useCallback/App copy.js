import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./App.css";
import Hello from "./Hello";
import Square from "./Square";

function App() {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    (n) => {
      setCount((prev) => prev + n);
    },
    [setCount]
  );

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map((n) => {
        return <Square increment={increment} n={n} key={n} />;
      })}
    </div>
  );
}

export default App;
