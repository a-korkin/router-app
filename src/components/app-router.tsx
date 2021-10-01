import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNamesEnum } from "../routes";

const AppRouter: FC = () => {
    const isAuth = false;

    return (
        isAuth
        ?
        <Switch>
            {
                privateRoutes.map(({path, component, exact}) => <Route key={path} path={path} component={component} exact={exact} />)
            }
            <Redirect to={RouteNamesEnum.DEFAULT} />
        </Switch>
        :
        <Switch>
            {
                publicRoutes.map(({path, component, exact}) => <Route key={path} path={path} component={component} exact={exact} />)
            }
            <Redirect to={RouteNamesEnum.LOGIN} />
        </Switch>
    );
}

export default AppRouter;
