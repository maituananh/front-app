import Layout from "../layout/layout";
import Home from "../pages/home";
import Login from "../pages/login";
import User from "../pages/user";
import AddUser from "../pages/add-user"
import NotFound from "../pages/not-found";
import UserList from "../pages/user-list";

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
        path: "/user-list",
        element: UserList,
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