import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes, Route, useLocation } from "react-router-dom";
import React from 'react'
import './App.css';
import Navbar from './Pages/landing/Navbar';
import Main from './Pages/landing/Main';
import Layout from './Pages/dashboard/components/Layout';
import Profile from './Pages/dashboard/Pages/Profile';
import Messages  from './Pages/dashboard/Pages/Messages';
import Yearbooks  from './Pages/dashboard/Pages/Yearbooks';
import AlumniID  from './Pages/dashboard/Pages/AlumniID';
import InitiativeProgram from './Pages/dashboard/Pages/InitiativeProgram';
import GTS from './Pages/dashboard/Pages/Gts';
import SignInModal from './Pages/landing/SignInModal';
import Dashboard from './Pages/dashboard/Dashboard';

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
      <Route path="/dashboard" element={<Layout/>}>
      <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="yearbooks" element={<Yearbooks />} />
          <Route path="alumni-id" element={<AlumniID />} />
          <Route path="initiative-program" element={<InitiativeProgram />} />
          <Route path="gts" element={<GTS />} />
          </Route>
    </Routes>
    
    </div>
  )
}

export default App