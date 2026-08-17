import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e) =>{return e.isActive? "red" : ""}} to="/">Home</NavLink> <br />
        <NavLink className={(e) =>{return e.isActive? "red" : ""}} to="/about">About</NavLink> <br />
        <NavLink className={(e) =>{return e.isActive? "red" : ""}} to="/profile">Profile</NavLink> <br />
      </nav>
    </div>
  );
};

export default NavBar;
