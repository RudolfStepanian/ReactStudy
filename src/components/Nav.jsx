import React from 'react';
import cl from './Nav.module.css';

const Nav = () =>{
    return <nav className={cl.nav}>
    <div className={cl.item}>
      <a>Profile</a>
    </div>
    <div className= {`${cl.item} ${cl.active}`}>
      <a>Messages</a>
    </div>
    <div className={cl.item}>
      <a>News</a>
    </div>
    <div className={cl.item}>
      <a>Music</a>
    </div>
    <div className={cl.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Nav;