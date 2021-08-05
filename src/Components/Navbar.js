import React, { useState } from "react";
import "./Navbar.css";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
// import Menu from './Menu'

//test karan
import {
  Menu,
  MenuItem,
  MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css'
//
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
          <Link >
              {/* <Menu name = 'Industries' option1="Industries" option2="Oil And Gas" option3="Pharma" option4="Food and Beverages"/> */}
              <a>
              <Menu menuButton={<MenuButton className="menu__button">Industries</MenuButton>}>
                  <MenuItem>
                    <Link to="/industries">Industries</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/oilandgas">Oil And Gas</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link to="/pharmaceuticals">Pharmaceuticals</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link to="/foodandbeverages">Food and Beverages</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link to="/chemicals">Chemicals</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link to="/waterprocessing">Water Processing</Link>
                  </MenuItem>
                  <MenuItem> 
                    <Link to="/powergeneration">Power Generation</Link>
                  </MenuItem>
              </Menu>
              </a>
          </Link>
          <Link >
          <a>
            {/* <Menu name = 'Products' option1="Oil And Gas" option2="Pharma" option3="Food and Beverages"/> */}
            <Menu menuButton={<MenuButton className="menu__button">Products</MenuButton>}>
                  <MenuItem>
                    <Link to="/services">services</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/oilandgas">Oil And Gas</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/pharma">pharma</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/foodandbeverages">Food and Beverages</Link>
                  </MenuItem>
              </Menu>
              </a>
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
