import React from "react";
import useToggle from "./useToggle";

function App() {
  const [value, toggleValue] = useToggle(true);

  return (
    <div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(false)}>Hide</button>
      {/* <button onClick={toggleValue(true)}>Show</button> */}
      <button onClick={() => toggleValue(true)}>Show</button>

      {value ? <p>Hello</p> : null}
    </div>
  );
}

export default App;
