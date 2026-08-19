import React from "react";
import { memo } from "react";

const Navbar = ({adjective, getAdjective})=> {
    console.log("Navbar")
    return(
        <div>
        This is {adjective} Navbar
        <button onClick={()=>{getAdjective()}}>Change Me</button>
        </div>
    )
};

export default memo(Navbar);