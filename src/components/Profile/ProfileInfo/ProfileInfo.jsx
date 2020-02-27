import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = (prop) => {
    return(
        <div>
            <div>
                <img height='400px' width='500px' src='https://c8.alamy.com/comp/AXBEXR/stock-photograph-of-a-asian-teen-with-a-trumpet-to-her-ear-AXBEXR.jpg' />
            </div>
            <div className={cl.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
};

export default ProfileInfo;