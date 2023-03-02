import React, { useContext } from "react";
import login from "./login";
import { UserContext } from "./UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(value, setValue);
  console.log(user);
  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call server
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Home;
