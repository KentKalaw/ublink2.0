import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import ProfilePic from '../images/pfp-test.png';

function Profile() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditIconClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  // const handleFileInputChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   // Do something with the selected file
  //   console.log('Selected file:', selectedFile);
  // };

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/');
  }, [logout, navigate]);

  return (
    <div className="profile-container">
      <div className="profile-card">
      <div className="profile-label">Profile</div>
        <div className="profile-left">
          <img src={ProfilePic} alt="Profile" className="edit-profile-pic" />
          <h2>Kent Francis Kalaw</h2>
          <p>kentfranciskalaw@gmail.com</p>
          <p>Batangas, Philippines</p>
          {!isEditing && (
            <button className="btn btn-primary edit-profile-button" onClick={handleEditIconClick}>Edit Profile</button>
          )}
          
        </div>
        <div className="profile-right">
          {isEditing ? (
            <div className="edit-profile-form">
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="Enter Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Contact</label>
                  <input type="text" className="form-control" id="contactNo" placeholder="Enter Contact No." />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Occupation</label>
                  <input type="text" className="form-control" id="occupation" placeholder="Enter Occupation" />
                </div>
                <div className="button-container">
              <button type="submit" className="btn btn-primary save-button">Save</button>
              <button type="button" className="btn btn-secondary cancel-button" onClick={handleCancelEdit}>Cancel</button>
            </div>
              </form>
            </div>
          ) : (
            <div className="profile-info">
              <div className="info-row">
                <span className="info-label">First Name:</span>
                <span className="info-value">Kent Francis</span>
              </div>
              <div className="info-row">
              <span className="info-label">Last Name:</span>
              <span className="info-value">Kalaw</span>
            </div>
            <div className="info-row">
              <span className="info-label">Role:</span>
              <span className="info-value">Alumni</span>
            </div>
            <div className="info-row">
              <span className="info-label">Email:</span>
              <span className="info-value">example@gmail.com</span>
            </div>
            <div className="info-row">
              <span className="info-label">Address:</span>
              <span className="info-value">Kumintang Ilaya, Batangas City</span>
            </div>
            <div className="info-row">
              <span className="info-label">Contact:</span>
              <span className="info-value">+63 912 346 7891</span>
            </div>
            <div className="info-row">
              <span className="info-label">Occupation:</span>
              <span className="info-value">Web Developer</span>
            </div>
            <div className="info-row">
              <span className="info-label">Year Graduated:</span>
              <span className="info-value">2025</span>
            </div>
            <div className="info-row">
              <span className="info-label">Status:</span>
              <span className="info-value active">Active</span>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
