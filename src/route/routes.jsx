import Layout from '../layout/layout';
import Home from '../pages/home';
import Login from '../pages/login';
import User from '../pages/user';
import AddUser from '../pages/add-user';
import NotFound from '../pages/not-found';
import UserList from '../pages/user-list';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../components/protectedRoute';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'add-user',
        element: <AddUser />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
