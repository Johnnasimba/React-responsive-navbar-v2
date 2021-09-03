import React from 'react'
import MenuList from './menu-list';
import { NavLink } from 'react-router-dom';

import './navbar.styles.css';

const Navbar  = () => {
    const menuList = MenuList.map(({title, url}, index) => {
        return (
            <li key = {index}>
                <NavLink to={url} exact activeClassName="active"> 
                    {title} 
                </NavLink>
            </li>
        )
    });
    return (
        <nav className="navbar">
            <div className="logo">
                Fitness<font>Hub</font>
            </div>
            <div className="menu-icon">
                <i className="fa fa-bars"></i>
            </div>
            <ul className="menu-list">
                {menuList}
            </ul>
        </nav>
    )
}

export default Navbar;