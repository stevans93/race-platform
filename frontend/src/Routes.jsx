import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import App from './App'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error 404</div>,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
        ]
    }
])

export default router