import Layout from '../layout/layout';
import Home from '../pages/home';
import Login from '../pages/login';
import User from '../pages/user';
import AddUser from '../pages/new-user';
import NotFound from '../pages/not-found';
import UserList from '../pages/user-list';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from '../components/protectedRoute';
import NewProductForm from '../pages/new-product';
import NewUserForm from '../pages/new-user';

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
        path: 'new-user',
        element: <NewUserForm />,
      },
      {
        path: 'users',
        element: <UserList />,
      },
      {
        path: 'new-product',
        element: <NewProductForm />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
