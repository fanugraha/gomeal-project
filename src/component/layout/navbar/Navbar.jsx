import { Link } from "react-router-dom";
import { SidebarData } from "../sidebar/SidebarData";
import "./Navbarstyle.css";

const Navbar = () => {
  return (
    <div className="NavbarDown">
      {SidebarData.map((item, index) => (
        <div key={index} className="Navitem">
          <img src={item.icon} alt="" />
          <Link to={item.path}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
