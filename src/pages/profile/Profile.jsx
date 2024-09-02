import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/Profilenfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts} />
        </div>
    );
};

export default Profile;
