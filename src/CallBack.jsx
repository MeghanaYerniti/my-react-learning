import React from "react";
import { useState, useMemo, useCallback } from "react";
import Navbar from "./component/Navbar";



const CallbackHook = () => {
  const [adjective, setAdjective] = useState("good")
  const [count, setCount] = useState(0)

  const getAdjective = useCallback(() => {
    return "another"
  }, []) // callback - will store the value even when state changes.

  console.log("Main")
  return(
    <>
    <button onClick={()=>{setCount(prev => prev+1)}}>Increase Count : {count}</button> <br />
    <Navbar adjective={"good"} getAdjective={getAdjective} />
    </>
  )
};

export default CallbackHook;
