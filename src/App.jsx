import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './route/routes';
import { AuthProvider } from './providers/authProvider';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
