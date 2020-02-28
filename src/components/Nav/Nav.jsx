import React from 'react';
import cl from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (prop) => {
    return <nav className={cl.nav}>
        <div className={cl.item}>
            <NavLink to="/profile" activeClassName={cl.activeLink}>Profile</NavLink>
        </div>
        <div className={`${cl.item}`}>
            <NavLink to="/Dialogs" activeClassName={cl.activeLink}>Messages</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to="/News" activeClassName={cl.activeLink}>News</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to="/Music" activeClassName={cl.activeLink}>Music</NavLink>
        </div>
        <div className={cl.item}>
            <NavLink to="/Settings" activeClassName={cl.activeLink}>Settings</NavLink>
        </div>
    </nav>
};

export default Nav;