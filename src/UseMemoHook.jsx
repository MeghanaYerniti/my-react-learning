import React from "react";
import { useState, useMemo } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000,
  };
});
const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  // const magical numbers.find(item=>item.isMagical== true) // Expensive Computation
  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true), // our calculation
    [numbers], // on change of which value we have to do the above calculation
  );
  return (
    <>
      <span>Magical number is {magical.index}</span> <br/>
      <button onClick={() => {
        setCount(count + 1);
        if(count==10){
            setNumbers(new Array(10_000_000).fill(0).map((_,i) => { // we are only recalculating when number changed
                return{
                    index : i,
                    isMagical: i===9_000_000
            }
            }))
        }
      }}>
        Count is {count}
      </button>
    </>
  );
};

export default UseMemoHook;
