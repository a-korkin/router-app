import React, { FC } from "react";
import AppRouter from "../app-router";
import { Link } from "react-router-dom";
import "./styles.css";
import { useAction } from "../../hooks/use-action";
import { useTypedSelector } from "../../hooks/use-typed-selector";

const App: FC = () => {
    const { login } = useAction();
    const { isLoading } = useTypedSelector(state => state.auth);
    
    console.log(`isLoading - ${isLoading}`);

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
