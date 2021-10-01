import React, { FC } from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import "./styles.css";

const LoginForm: FC = () => {
    return (
        <div className="login">
            <form>
                <Input type="text" label="Логин" name="username" placeholder="логин" />
                <br />
                <Input type="password" label="Пароль" name="password" placeholder="пароль" />
                <br />
                <Button class_="primary">ВОЙТИ</Button>
            </form>
        </div>
    );
}

export default LoginForm;
