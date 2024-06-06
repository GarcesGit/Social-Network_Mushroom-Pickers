import React from "react";
import cl from "./Profile.module.css";
import man6 from "../../pictures/man6.jpg";
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img src={man6} className={cl.profile_photo} />
                Name
            </div>
            <MyPosts />
        </div>
    );
};

export default Profile;
