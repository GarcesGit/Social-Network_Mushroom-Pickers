import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    let postsData = [
        { id: 1, post: "Yesterday I saw ducks", likesCount: 3 },
        { id: 2, post: "They were fat and nice", likesCount: 5 },
        { id: 3, post: "Today I saw Ivan", likesCount: 7 },
        { id: 4, post: "The man was more respectable", likesCount: 9 },
    ];

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
            <Post post="Somepost" likesCount={postsData[0].likesCount} />
            <Post post={postsData[1].post} likesCount={postsData[1].likesCount} />
            <Post post={postsData[2].post} likesCount={postsData[2].likesCount} />
            <Post post={postsData[3].post} likesCount={postsData[3].likesCount} />
        </div>
    );
};

export default MyPosts;
