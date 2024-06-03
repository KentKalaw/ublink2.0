import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css'; 

function AdminSidebar({ logoutHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const adminToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`admin-sidebar ${isOpen ? 'open' : ''}`}>
    <div className="admin-sidebar-content">
      <h2 className="admin-sidebar-title">Admin Dashboard</h2>
      <button className="admin-sidebar-toggle" onClick={adminToggleSidebar}>
        <i className="bi bi-list"></i>
      </button>
      <ul className="admin-nav flex-column">
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin">
              <i className="bi bi-house-door-fill"></i> Dashboard
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/feature-alumni">
              <i className="bi bi-person-circle"></i> Feature Alumni
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/active-initiative-program">
              <i className="bi bi-lightbulb-fill"></i> Active Initiative Program
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/admin-gts">
              <i className="bi bi-file-earmark-fill"></i> GTS
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/manage-featured-alumni">
              <i className="bi bi-file-person-fill"></i> Manage Featured Alumni
            </NavLink>
          </li>
          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/manage-initiative-program">
              <i className="bi bi-lightbulb-fill"></i> Manage Initiative Program
            </NavLink>
          </li>

          <li className="admin-nav-item">
            <NavLink className="admin-nav-link" to="/admin/system-logs">
              <i className="bi bi-file-earmark-fill"></i> System Logs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminSidebar;