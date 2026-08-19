import React from "react";
import { useState, useMemo } from "react";
import Navbar from "./component/Navbar";



const UseMemoHook = () => {
  const [adjective, setAdjective] = useState("good")
  const [count, setCount] = useState(0)

  const getAdjective = () => {  // here in this will be treated as new and render the child element even if value is same so we will use callacks
    return "another"
  }

  console.log("Main")
  return(
    <>
    <button onClick={()=>{setCount(prev => prev+1)}}>Increase Count : {count}</button> <br />
    <Navbar adjective={"good"} getAdjective={getAdjective} />
    </>
  )
};

export default UseMemoHook;
