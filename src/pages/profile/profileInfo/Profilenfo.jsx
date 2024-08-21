import React from "react";
import cl from "../../profile/Profile.module.css";
import man6 from "../../../pictures/man6.jpg";

const ProfileInfo = (props) => {
    return (
        <div className={cl.item + " " + cl.background}>
            <img src={man6} className={cl.profile_photo} />
            <div> ava+description</div>
        </div>
    );
};

export default ProfileInfo;
