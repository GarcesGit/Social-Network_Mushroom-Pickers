import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className={cl.post_input}
                        placeholder="text"
                        aria-label="text"
                        aria-describedby="button-addon2"
                    />
                    <button className="btn btn-dark" type="button" id="button-addon2">
                        New post
                    </button>
                </div>
            </div>
            <Post message="Today I saw ducks" likesCount="0" />
            <Post message="They were fat and nice" likesCount="3" />
        </div>
    );
};

export default MyPosts;
