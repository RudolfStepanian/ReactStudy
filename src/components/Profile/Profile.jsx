import React from 'react';
import cl from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
            <div>
                <img height='500px' width='600px' src='https://c8.alamy.com/comp/AXBEXR/stock-photograph-of-a-asian-teen-with-a-trumpet-to-her-ear-AXBEXR.jpg' />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;