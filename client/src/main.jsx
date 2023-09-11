import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import LandingPage from './pages/Landing.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import HomePage from './pages/Home.jsx'
import Blackjack from './pages/Blackjack.jsx'
import Tutorial from './pages/Tutorial.jsx'


import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <LandingPage />
      }, {
        path: '/login',
        element: <LoginPage/>
      }, {
        path: '/signup',
        element: <SignupPage/>
      }, {
        path: '/home',
        element: <HomePage/>
      }, {
        path: '/blackjack',
        element: <Blackjack/>
      }, {
        path: '/tutorial',
        element: <Tutorial/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
