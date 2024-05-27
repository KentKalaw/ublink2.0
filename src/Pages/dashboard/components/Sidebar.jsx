import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 

function Sidebar({ logoutHandler }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">Dashboard</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">
              <i className="bi bi-house-door-fill"></i> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/profile">
              <i className="bi bi-mortarboard-fill"></i> Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/messages">
              <i className="bi bi-chat-fill"></i> Messages
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/yearbooks">
              <i className="bi bi-journal-bookmark-fill"></i> Yearbooks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/alumni-id">
              <i className="bi bi-file-person-fill"></i> ID reApplication
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/initiative-program">
              <i className="bi bi-lightbulb-fill"></i> Initiative Programs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/gts">
              <i className="bi bi-file-earmark-fill"></i> GTS
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={logoutHandler}>
              <i className="bi bi-box-arrow-right"></i> Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;