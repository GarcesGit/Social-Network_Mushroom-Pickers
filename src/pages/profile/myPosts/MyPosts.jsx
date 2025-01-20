import React, { useRef } from "react";
import Post from "./post/Post";
import Input from "../../../components/UI/input/Input";
import Button from "../../../components/UI/input/button/Button";

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post post={p.post} likesCount={p.likesCount} />
    ));

    const newPostElement = useRef();

    const onAddPost = () => {
        props.addPosts();
        newPostElement.current.value = "";
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className="input-group mb-3">
                    <Input ref={newPostElement} change={onPostChange} />
                    <Button buttonText="Click" click={onAddPost} />
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;
