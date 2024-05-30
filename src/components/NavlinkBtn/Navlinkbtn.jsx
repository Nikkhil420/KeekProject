import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkBtn = (props) => {
 
const [to , title] = {props}

  return (
    <NavLink
    to={to}
    
    >
      {title}
    </NavLink>
  );
};

export default NavLinkBtn;
