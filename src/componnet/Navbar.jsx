import React from "react";
import { memo } from "react";

const Navbar = ({adjective})=> {
    console.log("Navbar")
    return(
        <p>This is {adjective} Navbar</p>
    )
};

export default memo(Navbar);