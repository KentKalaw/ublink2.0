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
import Admin from './Pages/admin/Admin';
import AdminLayout from './Pages/admin/AdminLayout';
import FeatureAlumni from './Pages/admin/AdminPages/FeatureAlumni';
import ActiveInitiativeProgram from './Pages/admin/AdminPages/ActiveInitiativeProgram';
import SystemLogs from './Pages/admin/AdminPages/SystemLogs';
import AdminGts from './Pages/admin/AdminPages/AdminGts';
import ManageAlumni from './Pages/admin/AdminPages/ManageAlumni';
import ManageProgram from './Pages/admin/AdminPages/ManageProgram';

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
      <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<Admin />} />
          <Route path="feature-alumni" element={<FeatureAlumni />} />
          <Route path="active-initiative-program" element={<ActiveInitiativeProgram />} />
          <Route path="admin-gts" element={<AdminGts />} />
          <Route path="manage-featured-alumni" element={<ManageAlumni />} />
          <Route path="manage-initiative-program" element={<ManageProgram />} />
          <Route path="system-logs" element={<SystemLogs />} />
      </Route>
    </Routes>
    
    </div>
  )
}

export default App