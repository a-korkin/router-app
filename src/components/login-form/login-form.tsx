import React, { FC } from "react";
import "./styles.css";

const LoginForm: FC = () => {
    return (
        <form>
            <div className="field">
                <label htmlFor="username">Логин</label>
                <input type="text" name="username" id="username" placeholder="логин" />
            </div>
            <div className="field">
                <label htmlFor="password">Пароль</label>
                <input type="password" name="password" id="password" placeholder="пароль" />
            </div>
        </form>
    );
}

export default LoginForm;
