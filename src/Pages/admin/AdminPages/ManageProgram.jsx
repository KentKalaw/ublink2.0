import React, {useState} from 'react';
import './ManageProgram.css';

function ManageProgram() {
  
  
  // eslint-disable-next-line
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [typeOfProgram, setTypeOfProgram] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted successfully!');
  };

  return (
    <div className="manage-program-container">
    <h2 className="manage-program-title">Add Initiative Program</h2>
    <form onSubmit={handleSubmit} className="manage-program-form">
      <div className="manage-program-row">
        <div className="manage-program-input">
          <label>
            Image:
            <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
          </label>
        </div>
      </div>
      <div className="manage-program-row">
        <div className="manage-program-input">
          <label>
            Program Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
        </div>
        <div className="manage-program-input">
          <label>
            Category:
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
          </label>
        </div>
      </div>
      <div className="manage-program-row">
        <div className="manage-program-input">
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
          </label>
        </div>
        <div className="manage-program-input">
          <label>
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
          </label>
        </div>
      </div>
      <div className="manage-program-row">
        <div className="manage-program-input">
          <label>
            Type of Program:
            <input type="text" value={typeOfProgram} onChange={(e) => setTypeOfProgram(e.target.value)} />
          </label>
        </div>
      </div>
      <div className="manage-program-row">
        <div className="manage-program-input">
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
        </div>
      </div>
      <button type="submit" className="manage-program-submit">Add to Initiative Program</button>
    </form>
  </div>
  )
}

export default ManageProgram