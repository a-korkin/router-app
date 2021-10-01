import React, { FC } from "react";
import AppRouter from "../app-router";
import { Link } from "react-router-dom";
import "./styles.css";

const App: FC = () => {

    return (
        <div>
            <nav className="menu">
                <Link to="/">Default</Link>
                <Link to="/users">Users</Link>
                <Link to="/persons">Persons</Link>
                <Link to="/cases">Cases</Link>
            </nav>
            <AppRouter />
        </div>
    );
}

export default App;
