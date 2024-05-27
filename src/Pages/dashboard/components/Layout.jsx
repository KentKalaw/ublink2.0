import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout({ logoutHandler }) {
  return (
    <div className="layout">
      <Sidebar logoutHandler={logoutHandler} />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;