import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const updateEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input placeholder="Email" value={email} onChange={updateEmail} />
    </>
  );
};

export default App;
