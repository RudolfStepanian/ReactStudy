import React from 'react';
import cl from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (prop) => {
    let friendsList = prop.friendsList
        .map((el) => {
            return (<div className={cl.friendIco}>
                    <img className={cl.friendAva} src={el.ava}/>
                    <h6 className={cl.friendName}>{el.name}</h6>
                </div>
            )
        });

    return (
        <div>
            <h1>Friends</h1>
            <div className={cl.friendBlock}>
                {friendsList}
            </div>
        </div>
    )
};

export default Friends;