import React from 'react';
import cl from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Header = (props) => {
    return <header className={cl.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'/>

        <div className={cl.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;
