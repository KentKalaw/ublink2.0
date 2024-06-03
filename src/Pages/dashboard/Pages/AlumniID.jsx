import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AlumniID.css';

function AlumniID() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/');
  }, [logout, navigate]);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [course, setCourse] = useState('');
  const [yearGraduated, setYearGraduated] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if terms are accepted before submitting the form
    if (termsAccepted) {
      // Handle form submission logic here
      console.log('Form submitted successfully!');
    } else {
      alert('Please accept the terms and conditions to submit the form.');
    }
  };

  return (
    <div className="alumni-form-container">
  <h2>Alumni Privilege Card Application Form</h2>
  <form onSubmit={handleSubmit}>
    <div>
      <label>
        Full Name:
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Contact Number:
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Course:
        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
      </label>
    </div>
    <div>
      <label>
        Year Graduated:
        <input type="text" value={yearGraduated} onChange={(e) => setYearGraduated(e.target.value)} required />
      </label>
    </div>
    <div className="terms">
      <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} required />
      <label>I accept the Terms and Conditions</label>
    </div>
    <button type="submit" disabled={!termsAccepted}>Submit</button>
  </form>
  <div>
  </div>
</div>
  );
}

export default AlumniID;
