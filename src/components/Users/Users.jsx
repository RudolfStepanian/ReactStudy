import React from "react";
import cl from "./Users.module.css";
import userPhoto from '../../../src/asets/images/artist.avatar.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                  className={(p == props.currentPage) ? cl.selectedPage : ""}>{p} </span>)}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.large != null ? u.photos.large : userPhoto}
                             className={cl.usersPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id == u.id)} onClick={() => {
                                props.follow(u.id);
                            }}>follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                </span>
        </div>)}
    </div>
};

export default Users;