import React from "react";
import {CountContext}from "../context/context.js";

function Component1() {
    const count = React.useContext(CountContext);
    
  return (
    <>
      <h1>Heading from Component 1</h1>
      <p>Count: {count}</p>
    </>
  );
}

export default Component1;