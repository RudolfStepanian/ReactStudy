import React from "react";
import cl from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../../src/asets/images/artist.avatar.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        let pageCount = this.props.totalUsersCount / this.props.pageCount
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                { pages.map(p =>  <span className={cl.selectedPage}>{p}</span> ) }
            </div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.large != null ? u.photos.large : userPhoto}
                             className={cl.usersPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
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
}

export default Users;