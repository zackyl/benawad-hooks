import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../App.css";
import Hello from "./Hello";
import useFetch from "./useFetch";
import { useForm } from "./useForm";
import useMeasure from "./useMeasure";

function App() {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstname: "",
  });
  const [showHello, setShowHello] = useState(true);

  // useLayoutEffect(() => {
  //   console.log(inputRef.current.getBoundingClientRect())
  // }, []);

  const inputRef = useRef();
  const [rect, inputRef2] = useMeasure([]);

  return (
    <div className="App">
      <button onClick={() => setShowHello((prev) => !prev)}>toggle</button>
      {showHello ? <Hello /> : null}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        ref={inputRef2}
        name="firstname"
        value={values.firstname}
        placeholder="firstname"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <input name="aa" type="aa" />
      <button
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
        }}
      >
        focus
      </button>
    </div>
  );
}

export default App;
