import React from "react";
import { useState, useMemo, useCallback } from "react";
import Navbar from "./component/Navbar";



const CallbackHook = () => {
  const [adjective, setAdjective] = useState("good")
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const getAdjective = useCallback(() => {
    return "another" + count
  }, [count]) // here in dependency we are adding count. So if count changes then then child in rerendered
  // if count2 changed no child rerender.

  console.log("Main")
  return(
    <>
    <button onClick={()=>{setCount(prev => prev+1)}}>Increase Count : {count}</button> <br />
    <button onClick={()=>{setCount2(prev => prev+1)}}>Increase Count2 : {count2}</button> <br />
    <Navbar adjective={"good"} getAdjective={getAdjective} />
    </>
  )
};

export default CallbackHook;
