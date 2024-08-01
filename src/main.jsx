import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Login from './components/Login.jsx';
import AdminPanel from './pages/AdminPanel.jsx';
import Sidebar from './components/Sidebar.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<AdminPanel/>
  },

  {
    path:'/Login',
    element:<Login/>
  },

  {
    path:'/Sidebar',
    element:<Sidebar/>
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


