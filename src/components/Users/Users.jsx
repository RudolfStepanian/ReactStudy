import React from "react";
import cl from "./Users.module.css";
import userPhoto from '../../../src/asets/images/artist.avatar.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    debugger;
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
                        <img src={u.photos.large != null ? u.photos.large : userPhoto} className={cl.usersPhoto}
                             alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+u.id,{
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unfollow(u.id);
                                        }
                                    });
                            }}>unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+u.id, {},{
                                    withCredentials: true
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.follow(u.id);
                                        }
                                    });
                            }}>follow</button>}
                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                {/*<span>*/}
                {/*<div>"{u.location.city}"</div><div>"{u.location.country}"</div>*/}
                {/*</span>*/}
                </span>
        </div>)}
    </div>
};

export default Users;