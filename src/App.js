import { useState } from "react";
import "./App.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(e.target.value);
    }
    if (willUpdate) {
      setValue(e.target.value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </>
  );
};

export default App;
