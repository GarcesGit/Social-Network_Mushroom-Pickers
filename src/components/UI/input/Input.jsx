import React from "react";
import cl from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <input
            type="text"
            className={cl.inputBS}
            placeholder="my text"
            aria-label="text"
            aria-describedby="button-addon2"
            ref={ref}
            onChange={props.change}
        />
    );
});

export default Input;
