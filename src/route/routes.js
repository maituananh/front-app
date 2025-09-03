import Layout from "../layout/layout";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import Import from "../pages/import";
import AddUser from "../pages/addUser"
import NotFound from "../pages/not-found";

export const routes = [
    {
        path: "/",
        element: Home,
        layout: Layout
    },
    {
        path: "/home",
        element: Home,
        layout: Layout
    },
    {
        path: "/login",
        element: Login,
        layout: null
    },
    {
        path: "/user",
        element: User,
        layout: Layout
    },
    {
        path: "/import",
        element: Import,
        layout: Layout
    },
    {
        path: "/addUser",
        element: AddUser,
        layout: Layout
    },

    {
        path: "*",
        element: NotFound,
    },
];