import React, { useState } from "react";
import "./Navbar.css";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from './Menu'
function Navbar() {
  const [showlinks, setShowlinks] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__leftside">
        <StoreIcon className="store__logo" />
        <h3>KLENGAS</h3>
      </div>

      <div className="navbar__rightside">
        <div className="links" id={showlinks ? "hidden" : ""}>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/industries">
              <Menu name = 'Industries' option1="Industries" option2="Oil And Gas" option3="Pharma" option4="Food and Beverages"/>
          </Link>
          <Link to="/services">
            <Menu name = 'Products' option1="Oil And Gas" option2="Pharma" option3="Food and Beverages"/>
          </Link>
          <Link to="/aboutus">
            <a>About Us</a>
          </Link>
          <Link to="/contact">
            <a>Contact Us</a>
          </Link>
        </div>
        <button className="btn" onClick={() => setShowlinks(!showlinks)}>
          <MenuIcon />
        </button>
      </div>
      {/* switch and routing */}
    </div>
  );
}

export default Navbar;
