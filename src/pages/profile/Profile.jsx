import React from "react";
import ProfileInfo from "./profileInfo/Profilenfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                posts={props.profileState.posts}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
