import React from 'react'
import {useState} from 'react'
import Component1 from './Componnet1.jsx'

const Button = () => {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <>
    <button onClick={() => setShowComponent(!showComponent)}>Click Me!</button> <br/>
    {showComponent && <Component1 />}
    </>
  )
}

export default Button