import React from 'react';
import cl from './Nav.module.css';
import Friends from "./Friends/Friends";
import {NavLink} from "react-router-dom";

const Nav = (props) => {

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
        <Friends friendsList={props.state.friends} />
    </nav>
};

export default Nav;