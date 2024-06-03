import React from 'react'
import './ActiveInitiativeProgram.css';

import ActiveInitiativeImage from '../../dashboard/Pages/carousel/aespaArmageddon.jpg';

function ActiveInitiativeProgram() {

    const ActiveInitiativeProgram = [
      { image: ActiveInitiativeImage, title: 'Title of Program', category: 'Category', start: 'June 03, 2024', end: 'June 03, 2024', typeProgram: "Type of Program", description: 'If you are going through hell, keep going.'},
      { image: ActiveInitiativeImage, title: 'Title of Program', category: 'Category', start: 'June 03, 2024', end: 'June 03, 2024', typeProgram: "Type of Program", description: 'If you are going through hell, keep going.'},
      { image: ActiveInitiativeImage, title: 'Title of Program', category: 'Category', start: 'June 03, 2024', end: 'June 03, 2024', typeProgram: "Type of Program", description: 'If you are going through hell, keep going.'},
    ];
  
    return (
      <div className="active-program-container">
        <div className="active-program-table">
          <h2>Active Initiative Program</h2>
          <button className="add-initiative-program-button">Add Active Initiative Program</button>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Type of Program</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {ActiveInitiativeProgram.map(active_program => (
                <tr key={active_program.title}>
                  <td><img src={active_program.image} alt={active_program.title} /></td>
                  <td>{active_program.title}</td>  
                  <td>{active_program.category}</td>
                  <td>{active_program.start}</td>
                  <td>{active_program.end}</td>
                  <td>{active_program.typeProgram}</td>
                  <td>{active_program.description}</td>
                  <td>
                    <button className='active-program-update-button'>Update</button>
                    <button className='active-program-delete-button'>Delete</button>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  

export default ActiveInitiativeProgram