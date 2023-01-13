import { useRoutes } from 'react-router-dom'
import LoginSignup from './routes/login-signup'
import ErrorPage from './components/layouts/error-page'
import HomePage from './components/layouts/home-page'
import { ProtectedRoute } from './components/protected-route'

function App() {
  const routes = useRoutes([
    { path: '/', element: <ProtectedRoute><HomePage /></ProtectedRoute> },
    { path: '/login', element: <LoginSignup /> },
    { path: '*', element: <ErrorPage /> },
  ])
  return routes
}

export default App
