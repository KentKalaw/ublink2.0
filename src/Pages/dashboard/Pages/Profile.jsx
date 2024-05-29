import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import ProfilePic from '../images/pfp-test.png';

function Profile() {
  const navigate = useNavigate(); 
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false); 

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  return (
    <div className="edit-profile">
      <h2>Edit Your Profile</h2>
      <div className="profile-pic-container">
        <img src={ProfilePic} alt="Profile" className="edit-profile-pic" />
        <i className="edit-icon bi bi-pencil-square"></i>
      </div>
      <div className='edit-form-container'>
      <form className="profile-form">
        <row></row>
        <div className="form-row">
    <div className="form-group">
        <label>
          First Name:
          <input type="text" id="lastName" name="lastName" />
        </label>
        </div>
        <label>
          Last Name:
          <input type="text" id="lastName" name="lastName" />
        </label>
        </div>
        <label>
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label>
          Contact No:
          <input type="tel" id="contactNo" name="contactNo" />
        </label>
        <label>
          Address:
          <input type="text" id="address" name="address" />
        </label>
        <label>
          Occupation:
          <input type="text" id="occupation" name="occupation" />
        </label>
        <label>
          Year Graduated:
          <input type="text" id="yearGrad" name="yearGrad" />
        </label>
        <label>
          Company:
          <input type="text" id="company" name="company" />
        </label>
        <div className="botton-row">
    <div className="botton-group">
        <button type="submit">Save</button>
        </div>
        <button type="cancel">Cancel</button>
        </div>
      </form>
      </div>
      </div>
    
  );
}

export default Profile