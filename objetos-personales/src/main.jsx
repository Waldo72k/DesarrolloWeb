import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import PermanentDrawerLeft from './pages/dashboard';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard/>
  </React.StrictMode>,
)
