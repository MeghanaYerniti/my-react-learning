import React from 'react'
import {useState} from 'react'
import Navbar from './component/Navbar.jsx'

const UseContext = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div>
        <p>This is UseContext and count: {count}</p> <br />
        <button onClick={() => setCount(count + 1)}>Increment Count</button> <br />
      <Navbar count={count}/>
    </div>
    </>
  )
}

export default UseContext