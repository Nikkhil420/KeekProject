import React, { useState } from "react";

import "./sideBar.css";
import { NavLink } from "react-router-dom"; 
import NavLinkBtn from '../NavlinkBtn/Navlinkbtn'


const SideBar = () => {




  return (
    <div className="sidebar">
      <h1>SocialVeins</h1>
      <div className="menuWrapper">
      <nav className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <li>
            <NavLink to="/" title="Home" />
            <NavLink to="/" > Home </NavLink>
          </li>
          <li>
           
            <NavLink  to="/managecampaigns" > Manage Campaigns </NavLink>
          </li>
          <li>
          
            <NavLink to="/reportgeneration" > Report Generation </NavLink>
          </li>
          <li>
   
            <NavLink to="/savedlists" > Saved Lists</NavLink>
          </li>
           <li>
        
            <NavLink to="/findinfluencers" > Find Influencers </NavLink>
            
          </li>
           <li>
      
            <NavLink to="/influencersbase" > Influencers Base </NavLink>
          </li>
        </ul>
        <h3>Accounts</h3>
        <li>
          
            <NavLink to="/hireinfluencers" > Hire Influencers </NavLink>
          </li>
          <li>
            
            <NavLink to="/settings" > Settings </NavLink>
          </li>
          <li>
          
            <NavLink to="/livesupport" > Live Support </NavLink>
          </li>
      </nav>
      </div>
    </div>
  );
};

export default SideBar;
