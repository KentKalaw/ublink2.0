import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import './App.css';
import Navbar from './Pages/Navbar';
import Main from './Pages/Main';

import SignInModal from './Pages/SignInModal';
import Dashboard from './Pages/Dashboard';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="vh-100 overflow hidden">

     {isHomePage && (
        <>
          <Navbar />
          <Main />
        </>
      )}

    <Routes>
      <Route path="/" element={isHomePage ? null : <Navbar />} />
      <Route path='/SignInModal' element={<SignInModal/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </div>
  )
}

export default App