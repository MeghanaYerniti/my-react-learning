import React from 'react'
import {useState} from 'react'
import {CountContext} from './context/context.js'
import Navbar from './component/Navbar.jsx'

const UseContext = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <CountContext.Provider value={count}>
      <div>
        <p>This is UseContext and count: {count}</p> <br />
        <button onClick={() => setCount(count + 1)}>Increment Count</button> <br />
      <Navbar />
    </div>
    </CountContext.Provider>
    </>
  )
}

export default UseContext