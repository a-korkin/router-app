import React, { FC } from "react";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";
import Cases from "../pages/cases";
import Default from "../pages/default";
import Persons from "../pages/persons";
import Users from "../pages/users";

const AppRouter: FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Default</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/persons">Persons</Link>
                        </li>
                        <li>
                            <Link to="/cases">Cases</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/" exact component={Default} />
                <Route path="/users" component={Users} />
                <Route path="/persons" component={Persons} />
                <Route path="/cases" component={Cases} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default AppRouter;
