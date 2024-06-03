import React, { useState } from 'react';
import './ManageAlumni.css';

function ManageAlumni() {
    // eslint-disable-next-line
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [batchYear, setBatchYear] = useState('');
  const [course, setCourse] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [latinHonor, setLatinHonor] = useState('');
  const [quotes, setQuotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully!');
  };

  return (
    <div className="manage-alumni-container">
      <h2 className="manage-alumni-title">Add Featured Alumni</h2>
      <form onSubmit={handleSubmit} className="manage-alumni-form">
        <div className="manage-alumni-row">
          <div className="manage-alumni-input">
            <label>
              Image:
              <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
            </label>
          </div>
        </div>
        <div className="manage-alumni-row">
          <div className="manage-alumni-input">
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
          </div>
          <div className="manage-alumni-input">
            <label>
              Batch Year:
              <input type="text" value={batchYear} onChange={(e) => setBatchYear(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="manage-alumni-row">
          <div className="manage-alumni-input">
            <label>
              Course:
              <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} required />
            </label>
          </div>
          <div className="manage-alumni-input">
            <label>
              Contact No.:
              <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
            </label>
          </div>
        </div>
        <div className="manage-alumni-row">
          <div className="manage-alumni-input">
            <label>
              Latin Honor:
              <input type="text" value={latinHonor} onChange={(e) => setLatinHonor(e.target.value)} />
            </label>
          </div>
        </div>
        <div className="manage-alumni-row">
          <div className="manage-alumni-input">
            <label>
              Quotes:
              <textarea value={quotes} onChange={(e) => setQuotes(e.target.value)} required />
            </label>
          </div>
        </div>
        <button type="submit" className="manage-alumni-submit">Add to Featured Alumni</button>
      </form>
    </div>
  );
}

export default ManageAlumni;
