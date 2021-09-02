import React from 'react'
import MenuList from './menu-list';

import './navbar.styles.css';

const Navbar  = () => {
    const menuList = MenuList.map(({title, url}, index) => {
        return (
            <li key = {index}>
                <a href={url}> {title} </a>
            </li>
        )
    });
    return (
        <nav className="navbar">
            <div className="logo">
                Fitness<font>Hub</font>
            </div>
            <ul className="menu-list">
                {menuList}
            </ul>
        </nav>
    )
}

export default Navbar;