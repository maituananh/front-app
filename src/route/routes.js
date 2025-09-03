import Layout from "../layout/layout";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/User";
import Import from "../pages/Import";

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
    }
];