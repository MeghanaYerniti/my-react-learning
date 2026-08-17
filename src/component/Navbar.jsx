import React from 'react'
import Button from './Button1.jsx'

const Navbar = ({count}) => {
  return (
    <>
    <span><Button count={count}/> This is navbar</span>
    </>
  )
};

export default Navbar