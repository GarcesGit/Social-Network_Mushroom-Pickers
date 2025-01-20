import React from "react";
import {
    addPostsActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    const addPosts = () => {
        props.dispatch(addPostsActionCreator());
    };

    const updateNewPostText = (text) => {
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <>
            <MyPosts
                addPosts={addPosts}
                updateNewPostText={updateNewPostText}
                posts={props.posts}
            />
        </>
    );
};

export default MyPostsContainer;
