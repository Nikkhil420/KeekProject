import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

const Item = ({ selected, setSelected, title, to }) => {
  return (
   
      <p
        className={selected === title ? "menu-items-active" : "menu-items"}
        
        onClick={() => setSelected(title)}
      >
        {title}
      
      </p>
    
  );
};

const SideBar = (props) => {
  const [selected, setSelected] = useState("Home");

  const { menuItems, accountTitles } = props;

  console.log(selected);

  return (
    <div className="sidebar">
      <h1>SocialVeins</h1>
      <div className="menuWrapper">
        {menuItems.map((items) => (
          <Item
          key={items.id}
            selected={selected}
            setSelected={setSelected}
            title={items.title}
            to={items.to}
          />
        ))}

        <h4>Accounts</h4>

        {accountTitles.map((items) => (
          <Item
          key={items.id}
            selected={selected}
            setSelected={setSelected}
            title={items.title}
            to={items.to}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
