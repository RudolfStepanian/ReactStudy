import React from 'react';
import cl from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return(
        <div>
            <div>
                <img height='400px' width='500px' src='https://c8.alamy.com/comp/AXBEXR/stock-photograph-of-a-asian-teen-with-a-trumpet-to-her-ear-AXBEXR.jpg' />
            </div>
            <div className={cl.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + desc
            </div>
        </div>
    )
};

export default ProfileInfo;