import React, { useState } from 'react';
import './AdminGts.css';

function AdminGts() {
  const [name, setNameStatus] = useState('');
  const [department, setDepartmentStatus] = useState('');
  const [course, setCourseStatus] = useState('');
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

  

  return (
    <div className="admin-gts-container">
      <h2 className="admin-gts-title">Graduate Tracer Survey</h2>
      <form className="admin-gts-form">
        <div className="admin-gts-row">
          <div className="admin-gts-input">
            <label>
              Name:
              <input type="text" value={name} placeholder='Kent Francis Kalaw' onChange={(e) => setNameStatus(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Department:
              <input type="text" value={department} placeholder='CICT' onChange={(e) => setDepartmentStatus(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Course:
              <input type="text" value={course} placeholder='Bachelor of Science in Information Technology' onChange={(e) => setCourseStatus(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="admin-gts-row">
          <div className="admin-gts-input">
            <label>
              Permanent Address:
              <input type="text" value={permanentAddress} placeholder='Kumintang Ilaya, Batangas City' onChange={(e) => setPermanentAddress(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Email Address:
              <input type="email" value={emailAddress} placeholder='kentfranciskalaw@gmail.com' onChange={(e) => setEmailAddress(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Contact Number:
              <input type="text" value={contactNumber} placeholder='091234567891' onChange={(e) => setContactNumber(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="admin-gts-row">
          <div className="admin-gts-input">
            <label>
              Civil Status:
              <input type="text" value={civilStatus} placeholder='N/A' onChange={(e) => setCivilStatus(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Birthday:
              <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="admin-gts-row">
          <div className="admin-gts-input">
            <label>
              Degree & Specialization:
              <input type="text" value={degree} placeholder='N/A' onChange={(e) => setDegree(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Year Graduated:
              <input type="text" value={yearGraduated} placeholder='N/A' onChange={(e) => setYearGraduated(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="admin-gts-row">
          <div className="admin-gts-input">
            <label>
              Honors and Awards Received:
              <input type="text" value={honors} placeholder='N/A' onChange={(e) => setHonors(e.target.value)} required />
            </label>
          </div>
          <div className="admin-gts-input">
            <label>
              Professional Examinations Passed:
              <input type="text" value={professionalExams} placeholder='N/A' onChange={(e) => setProfessionalExams(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="admin-gts-input">
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
        <div className="admin-gts-input">
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
        <div className="admin-gts-input">
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
      </form>
    </div>
  );
}

export default AdminGts;
