import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gts.css';

function Gts() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem('auth')) navigate('/');
  }, [logout, navigate]);

  const [permanentAddress, setPermanentAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [birthday, setBirthday] = useState('');
  const [degree, setDegree] = useState('');
  const [yearGraduated, setYearGraduated] = useState('');
  const [honors, setHonors] = useState('');
  const [professionalExams, setProfessionalExams] = useState('');
  const [otherQualification, setOtherQualification] = useState('');
  const [presentlyEmployed, setPresentlyEmployed] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [name, setNameStatus] = useState('');
  const [department, setDepartmentStatus] = useState('');
  const [course, setCourseStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully!');
  };

  return (
    <div className="gts-container">
      <h2 className="gts-title">Graduate Tracer Survey</h2>
      <form onSubmit={handleSubmit} className="gts-form">
      <div className="gts-row">
          <div className="gts-input">
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setNameStatus(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Department:
              <input type="email" value={department} onChange={(e) => setDepartmentStatus(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Course:
              <input type="text" value={course} onChange={(e) => setCourseStatus(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-row">
          <div className="gts-input">
            <label>
              Permanent Address:
              <input type="text" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Email Address:
              <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Contact Number:
              <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-row">
          <div className="gts-input">
            <label>
              Civil Status:
              <input type="text" value={civilStatus} onChange={(e) => setCivilStatus(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-row">
          <div className="gts-input">
            <label>
              Birthday:
              <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Degree & Specialization:
              <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-row">
          <div className="gts-input">
            <label>
              Year Graduated:
              <input type="text" value={yearGraduated} onChange={(e) => setYearGraduated(e.target.value)} required />
            </label>
          </div>
          <div className="gts-input">
            <label>
              Honors and Awards Received:
              <input type="text" value={honors} onChange={(e) => setHonors(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-row">
          <div className="gts-input">
            <label>
              Professional Examinations Passed:
              <input type="text" value={professionalExams} onChange={(e) => setProfessionalExams(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="gts-input">
          <label>
            Did you possess other tertiary level qualification/advance studies?
            <div>
              <label>
                <input type="radio" name="otherQualification" value="yes" checked={otherQualification === 'yes'} onChange={(e) => setOtherQualification(e.target.value)} />
                Yes
              </label>
              <label>
                <input type="radio" name="otherQualification" value="no" checked={otherQualification === 'no'} onChange={(e) => setOtherQualification(e.target.value)} />
                No
              </label>
            </div>
          </label>
        </div>
        <div className="gts-input">
          <label>
            Are you presently employed?
            <div>
              <label>
                <input type="radio" name="presentlyEmployed" value="yes" checked={presentlyEmployed === 'yes'} onChange={(e) => setPresentlyEmployed(e.target.value)} />
                Yes
              </label>
              <label>
                <input type="radio" name="presentlyEmployed" value="no" checked={presentlyEmployed === 'no'} onChange={(e) => setPresentlyEmployed(e.target.value)} />
                No
              </label>
              <label>
                <input type="radio" name="presentlyEmployed" value="neverEmployed" checked={presentlyEmployed === 'neverEmployed'} onChange={(e) => setPresentlyEmployed(e.target.value)} />
                Never Employed
              </label>
            </div>
          </label>
        </div>
        <div className="gts-input">
          <label>
            Present Employment Status:
            <div>
              <label>
                <input type="radio" name="employmentStatus" value="regular" checked={employmentStatus === 'regular'} onChange={(e) => setEmploymentStatus(e.target.value)} />
                Regular or Permanent
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="temporary" checked={employmentStatus === 'temporary'} onChange={(e) => setEmploymentStatus(e.target.value)} />
                Temporary
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="casual" checked={employmentStatus === 'casual'} onChange={(e) => setEmploymentStatus(e.target.value)} />
                Casual
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="contractual" checked={employmentStatus === 'contractual'} onChange={(e) => setEmploymentStatus(e.target.value)} />
                Contractual
              </label>
              <label>
                <input type="radio" name="employmentStatus" value="selfEmployed" checked={employmentStatus === 'selfEmployed'} onChange={(e) => setEmploymentStatus(e.target.value)} />
                Self-employed
              </label>
            </div>
          </label>
        </div>
        <button type="submit" className="gts-submit">Submit</button>
      </form>
    </div>
  );
}

export default Gts;
