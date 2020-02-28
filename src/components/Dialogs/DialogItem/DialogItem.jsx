import React from 'react';
import cl from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={cl.dialog}>
            <NavLink activeClassName={cl.active} to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;