import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import FeaturePage from './pages/featurePage'
import ContactPage from './pages/contactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/feature/:id',
    element: <FeaturePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
