import React from 'react';
import myPic from "./myPicture.jpg";

const ProfilePhoto = () => {
    return (
        <div>
            <img src={myPic} alt="my profile pic" />
        </div>
    )
}

export default ProfilePhoto