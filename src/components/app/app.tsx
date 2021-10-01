import React, { FC } from "react";
import AppRouter from "../app-router";
import { Link } from "react-router-dom";
import "./styles.css";
import { useAction } from "../../hooks/use-action";

const App: FC = () => {

    const { login } = useAction();

    const clickHandler = () => {
        login();
    }

    return (
        <div>
            <nav className="menu">
                <Link to="/">Default</Link>
                <Link to="/users">Users</Link>
                <Link to="/persons">Persons</Link>
                <Link to="/cases">Cases</Link>
            </nav>
            <AppRouter />
            <button onClick={clickHandler}>login</button>
        </div>
    );
}

export default App;
