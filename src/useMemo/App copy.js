import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";
import useFetch from "./old/useFetch";

function App() {
  const [count, setCount] = useState(0);
  const { loading, data } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json"
  );

  // NOTE, can also just move outside function
  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    // console.log(arr);
    console.log("computing longest word");
    let longestWord = "";
    JSON.parse(arr).forEach((sentence) =>
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      })
    );
    return longestWord;
  }, []);

  const longestWord = useMemo(
    () => computeLongestWord(data),
    [computeLongestWord, data]
  );

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
}

export default App;
