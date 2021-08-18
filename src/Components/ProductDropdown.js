import React, { useState } from 'react';
import { ProductMenuItems } from './ProductMenuItems';
import './ProductDropdown.css';
import { Link } from 'react-router-dom';

function ProductDropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
      <ul
        onClick={handleClick}
        className={click ? 'productdropdown-menu clicked' : 'productdropdown-menu'}
      >
        {ProductMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
    )
}

export default ProductDropdown
