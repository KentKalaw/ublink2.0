import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import ProfilePic from '../images/pfp-test.png';

function Profile() {
  const navigate = useNavigate(); 
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false); 

  const handleEditIconClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = React.useRef(null);

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    // Do something with the selected file
    console.log('Selected file:', selectedFile);
  };


  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/'); // eslint-disable-next-line
  }, [logout, navigate]);

  return (
    <div className="edit-profile">
      <h2>Edit Your Profile</h2>
      <div className="profile-pic-container">
        <img src={ProfilePic} alt="Profile" className="edit-profile-pic" />
        <i className="edit-icon bi bi-pencil-square" onClick={handleEditIconClick}></i>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          onChange={handleFileInputChange} 
        />
      </div>
      <div className='edit-form-container'>
      <form className="profile-form">
        <row></row>
        <div className="form-row">
    <div className="form-group">
        <label>
          First Name:
          <input type="text" id="firstName" name="firstName" placeholder='Kent Francis' />
        </label>
        </div>
        <label>
          Last Name:
          <input type="text" id="lastName" name="lastName" placeholder='Kalaw' />
        </label>
        </div>
        <label>
          Email:
          <input type="email" id="email" name="email" placeholder='example@gmail.com' />
        </label>
        <label>
          Contact No:
          <input type="tel" id="contactNo" name="contactNo" placeholder='0961096109610' />
        </label>
        <label>
          Address:
          <input type="text" id="address" name="address" placeholder='Kumintang Ilaya, Batangas' />
        </label>
        <label>
          Occupation:
          <input type="text" id="occupation" name="occupation" placeholder='Web Developer' />
        </label>
        <label>
          Year Graduated:
          <input type="text" id="yearGrad" name="yearGrad" placeholder='2025' />
        </label>
        <label>
          Company:
          <input type="text" id="company" name="company" placeholder='Accenture'/>
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