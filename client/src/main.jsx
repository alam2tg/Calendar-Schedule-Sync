import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import LandingPage from './pages/Landing.jsx'
//import LoginPage from './components/Login.jsx'
//import SignupPage from './components/Signup.jsx'
import HomePage from './pages/Home.jsx'
import Blackjack from './pages/Blackjack.jsx'
import Tutorial from './pages/Tutorial.jsx'

// import material css to react for form components

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
      }, 
      // {
      //   path: '/login',
      //   element: <LoginPage/>
      // }, 
      // {
      //   path: '/signup',
      //   element: <SignupPage/>
      // }, 
      {
        path: '/home',
        element: <HomePage/>
      }, 
      {
        path: '/blackjack',
        element: <Blackjack/>
      }, 
      {
        path: '/tutorial',
        element: <Tutorial/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
