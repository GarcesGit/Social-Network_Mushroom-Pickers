import React from "react";

const Button = (props) => {
    return (
        <button
            className="btn btn-dark"
            type="button"
            id="button-addon2"
            onClick={props.click}
        >
            {props.buttonText}
        </button>
    );
};

export default Button;
