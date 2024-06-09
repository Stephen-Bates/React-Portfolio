import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import AboutPage from './pages/AboutPage'
// import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
// import ResumePage from './pages/ResumePage'
import ErrorPage from './pages/ErrorPage'

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: '/Contact',
        element: <ContactPage />
      },
      // {
      //   path: '/Portfolio',
      //   element: <PortfolioPage />
      // },
      // {
      //   path: '/Resume',
      //   element: <ResumePage />
      // },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
