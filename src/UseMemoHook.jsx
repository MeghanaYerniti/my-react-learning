import React from "react";
import { useState, useMemo } from "react";
import Navbar from "./componnet/Navbar";

const UseMemoHook = () => {
  const [adjective, setAdjective] = useState("good")
  const [count, setCount] = useState(0)

  console.log("Main")
  console.log(count)
  return(
    <>
    <button onClick={()=>{setCount(prev => prev+1)}}>Increase Count : {count}</button>
    <Navbar adjective={adjective}/>
    </>
  )
};

export default UseMemoHook;
