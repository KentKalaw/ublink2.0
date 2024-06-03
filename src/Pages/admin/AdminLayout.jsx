import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './AdminLayout.css';

function AdminLayout({ logoutHandler }) {
  return (
    <div className="admin-layout">
      <AdminSidebar logoutHandler={logoutHandler} />
      <div className="admin-main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;