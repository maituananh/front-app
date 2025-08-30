import Layout from "../layout/layout";
import Home from "../pages/home";
import Login from "../pages/login";
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
        path: "*",
        element: NotFound,
        layout: Layout
    },
];