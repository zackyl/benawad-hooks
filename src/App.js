import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import useFetch from "./old/useFetch";
import { UserContext } from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={providerValue}>
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export default App;
