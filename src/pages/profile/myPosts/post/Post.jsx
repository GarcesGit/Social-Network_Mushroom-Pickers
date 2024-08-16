import React from "react";
import cl from "./Post.module.css";
import man6 from "../../../../pictures/man6.jpg";

const Post = (props) => {
    return (
        <div className={cl.item + " " + cl.background}>
            <div className={cl.item_content}>
                <img src={man6} className={cl.profile_ava} />
                <div className={cl.message}>{props.message}</div>
            </div>
            <div className={cl.like}>
                <span>👍</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
