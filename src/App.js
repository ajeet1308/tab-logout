import './App.css';
import Login from './views/login';
import Logout from './views/logout';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import PrivateRoutes from './views/routes/privateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: '/',
        element: <Navigate to='/profile' />
      },
      {
        path: 'profile',
        element: <Logout />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
