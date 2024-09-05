import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    const postElements = props.posts.map((p) => (
        <Post post={p.post} likesCount={p.likesCount} />
    ));
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className={cl.post_input}
                        placeholder="my text"
                        aria-label="text"
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-dark" type="button" id="button-addon2">
                        New post
                    </button>
                </div>
            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;
