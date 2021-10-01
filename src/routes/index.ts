import React from "react";
import Cases from "../pages/cases";
import Default from "../pages/default";
import Login from "../pages/login";
import Persons from "../pages/persons";
import Users from "../pages/users";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNamesEnum {
    DEFAULT = "/",
    CASES = "/cases",
    PERSONS = "/persons",
    USERS = "/users",
    LOGIN = "/login"
}

export const privateRoutes: IRoute[] = [
    { path: RouteNamesEnum.DEFAULT, component: Default, exact: true },
    { path: RouteNamesEnum.CASES, component: Cases, exact: true },
    { path: RouteNamesEnum.USERS, component: Users, exact: true },
    { path: RouteNamesEnum.PERSONS, component: Persons, exact: true }
]

export const publicRoutes: IRoute[] = [
    { path: RouteNamesEnum.LOGIN, component: Login, exact: true}
]
