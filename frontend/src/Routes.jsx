import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import App from './App';
import Users from './pages/Users/Users';
import Events from './pages/Events/Events';
import MainPage from './pages/MainPage/MainPage';
import Goods from './pages/Goods/Goods';
import Packages from './pages/Packages/Packages';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: 'reset-password',
                element: <ResetPassword />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'events',
                element: <Events />
            },
            {
                path: 'goods',
                element: <Goods />
            },
            {
                path: 'packages',
                element: <Packages />
            },
            {
                path: 'settings',
                element: <Settings />
            },
        ]
      }
]);

export default router;