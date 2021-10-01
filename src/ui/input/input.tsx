import React, { FC } from "react";
import "./styles.css";

interface IInputProps {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
}

const Input: FC<IInputProps> = ({name, label, type, placeholder}) => {
    return (
        <div className="field">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} />
        </div>
    );
}

export default Input;
