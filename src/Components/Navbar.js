import React,{useState} from 'react'
import './Navbar.css'
import StoreIcon from '@material-ui/icons/Store';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';


function Navbar() {

    const [showlinks, setShowlinks] = useState(false)
    return (
        <Router>
            <div className="navbar">
                <div className="navbar__leftside">
                    <StoreIcon className="store__logo"/>
                    <h3>KLENGAS</h3>
                    

                </div>

                <div className="navbar__rightside">
                        <div className="links" id={showlinks ? "hidden" : ""}>
                            <Link to="/"><a >Home</a></Link>
                            <Link to="/industries"><a >Industries</a></Link>
                            <Link to="/services"><a >Services</a></Link>
                            <Link to="aboutus"><a >About Us</a></Link>
                            <Link to="contact"><a >Contact</a></Link>
                        </div>
                        <button className="btn" onClick={() => setShowlinks(!showlinks)}>
                            <MenuIcon />
                        </button>
                </div>
                {/* switch and routing */}
            </div>
        </Router>
    )
}

export default Navbar
