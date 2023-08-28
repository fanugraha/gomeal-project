import React from "react";
import "./Sidebarstyle.css";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Logo">
        <img src="src/assets/icon/logo.svg" alt="" />
      </div>
      <ul className="Navigation">
        {SidebarData.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              <img src={item.icon} alt="" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
