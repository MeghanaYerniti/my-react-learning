import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/profile">Profile</Link> <br />
      </nav>
    </div>
  );
};

export default NavBar;
