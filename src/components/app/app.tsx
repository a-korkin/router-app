import React, { FC } from "react";
import AppRouter from "../app-router";
import "./styles.css";

const App: FC = () => {
    return (
        <div className="container">
            <div className="header">header</div>
            <div className="main"><AppRouter /></div>
            <div className="sidebar">sidebar</div>
            <div className="footer">footer</div>
        </div>
    );
}

export default App;
