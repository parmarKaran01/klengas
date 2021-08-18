import React,{ useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown'
import ProductDropdown from './ProductDropdown'
import KlengasLogo from '../assets/images/KlengasLogo.png'


function Navbar() {

    const [click,setClick] = useState(false);
    const [dropdown, setDropdown]  = useState(false)
    const [productDropdown, setProductDropdown] = useState(false);

    const onMouseEnterIndustries = () =>{
        if(window.innerWidth < 960){
            console.log("abc")
            setDropdown(true)
        }else{
            console.log("def")
            setDropdown(true)
        }
    }

    const onMouseLeaveIndustries = () =>{
        if(window.innerWidth < 960){
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }

    const onMouseEnterProduct = () =>{
        if(window.innerWidth < 960){
            setProductDropdown(true)
        }else{
            setProductDropdown(true)
        }

    }
    const onMouseLeaveProduct = () =>{
        if(window.innerWidth < 960){
            setProductDropdown(false)
        }else{
            setProductDropdown(false)
        }

    }

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    return (
        <>
        <nav className="navbar">
            <Link to ="/" className="navbar__logo">
                <img src={KlengasLogo} alt="" width="200" height="105"/>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times":"fas fa-bars" } />
            </div>

            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/clients" className="nav-links" onClick={closeMobileMenu}>
                        Clients
                    </Link>
                </li>

                <li className='nav-item' 
                    onMouseEnter={onMouseEnterIndustries}
                    onMouseLeave = {onMouseLeaveIndustries}
                >
                    <Link to="/industries" className="nav-links" onClick={closeMobileMenu}>
                        Industries <i className='fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>

                <li className='nav-item'
                    onMouseLeave={onMouseLeaveProduct}
                    onMouseEnter={onMouseEnterProduct}
                >
                    <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                        Products <i className='fas fa-caret-down'/>
                    </Link>
                    {productDropdown && <ProductDropdown/>}
                </li>

                <li className='nav-item'>
                    <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>

            </ul>

        </nav>
        </>
    )
}

export default Navbar
