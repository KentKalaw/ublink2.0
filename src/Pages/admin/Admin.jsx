import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import './Admin.css';
import RecordTable from './RecordTable';
import ProfilePic from './images/admin-pic.jpg'

function Admin() {
    const navigate = useNavigate();
    // eslint-disable-next-line
    const [logout, setLogout] = useState(false);
    const [isAdminSidebarOpen, setIsAdminSidebarOpen] = useState(false);
    const [activeTable, setActiveTable] = useState('registeredAlumni');

    const AdminToggleSidebar = () => {
        setIsAdminSidebarOpen(!isAdminSidebarOpen);
    };

    const logoutHandler = (e) => {
      e.preventDefault();
      localStorage.removeItem('admin-auth');
      setLogout(true);
      window.location.href = '/';
    };

    React.useEffect(() => {
        if (!localStorage.getItem('admin-auth')) navigate('/');
    }, [logout, navigate]);

    const handleTableChange = (table) => {
        setActiveTable(table);
    };

    return (
        <div className="admin-dashboard">
           <div className="admin-profile-section">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
          <span className="profile-name">Administrator</span>
          <i className="admin-logout-dashboard bi bi-box-arrow-right icon-large" onClick={logoutHandler}></i>
        </div>
            <div className="admin-box-container">
                <div className="admin-box">
                    <h3>Number of Registered Alumni</h3>
                    <p>33</p>
                </div>
                <div className="admin-box">
                    <h3>Number of Subscribed Alumni</h3>
                    <p>27</p>
                </div>
                <div className="admin-box">
                    <h3>Featured Alumni</h3>
                    <p>3</p>
                </div>
                <div className="admin-box">
                    <h3>Active Initiative Program</h3>
                    <p>3</p>
                </div>
                <div className="admin-box">
                    <h3>Top Visitors</h3>
                    <p>2</p>
                </div>
            </div>
            <div className="record-table-handle-text">Record Table</div>
            <div className="admin-table-buttons">
                <button className={activeTable === 'registeredAlumni' ? 'active' : ''} onClick={() => handleTableChange('registeredAlumni')}>Registered Alumni</button>
                <button className={activeTable === 'yearbooks' ? 'active' : ''} onClick={() => handleTableChange('yearbooks')}>Yearbooks Subscription</button>
                <button className={activeTable === 'alumniprivilegecard' ? 'active' : ''} onClick={() => handleTableChange('alumniprivilegecard')}>Alumni Privilege Card</button>
                <button className={activeTable === 'approvals' ? 'active' : ''} onClick={() => handleTableChange('approvals')}>Sign Up Approvals</button>
            </div>
            <RecordTable selectedTable={activeTable} />
            <button className="sidebar-toggle" onClick={AdminToggleSidebar}>
                <i className="bi bi-list"></i>
            </button>
            <AdminSidebar isOpen={isAdminSidebarOpen} />
            <div className="admin-main-content"></div>
        </div>
    );
}

export default Admin;
