import React, { FC } from "react";
import "./styles.css";

interface IButtonProps {
    class_: string;
}

const Button: FC<IButtonProps> = (props) => {
    const classes = `button ${props.class_}`;
    return (
        <button className={classes}>{props.children}</button>
    );
}

export default Button;
