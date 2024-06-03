import React from 'react';
import './FeatureAlumni.css';
import FeatureAlumniImage1 from '../../dashboard/images/karina.jpg';
import FeatureAlumniImage2 from '../../dashboard/images/jennie.jpg';
import FeatureAlumniImage3 from '../../dashboard/images/winter.jpg';

function FeatureAlumni() {

  const FeatureAlumni = [
    { image: FeatureAlumniImage1, name: 'Karina', batchYear: '2020-2021', course: 'BSIT', contact: '091234567891', latinHonor: 'Magna cum laude', quote: 'If you are going through hell, keep going.'},
    { image: FeatureAlumniImage2, name: 'Jennie Kim', batchYear: '2019-2020', course: 'BSIT', contact: '091234567891', latinHonor: 'Magna cum laude', quote: 'If you want something done right, do it yourself.' },
    { image: FeatureAlumniImage3, name: 'Winter', batchYear: '2019-2020', course: 'BSIT', contact: '091234567891', latinHonor: 'Magna cum laude', quote: 'It takes courage to grow up and become who you really are.'  },
  ];

  return (
    <div className="feature-alumni-container">
      <div className="feature-alumni-table">
        <h2>Featured Alumni</h2>
        <button className="add-alumni-button">Add Feature Alumni</button>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Batch Year</th>
              <th>Course</th>
              <th>Contact No.</th>
              <th>Latin Honor</th>
              <th>Quotes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {FeatureAlumni.map(feature_alumni => (
              <tr key={feature_alumni.name}>
                <td><img src={feature_alumni.image} alt={feature_alumni.name} /></td>
                <td>{feature_alumni.name}</td>  
                <td>{feature_alumni.batchYear}</td>
                <td>{feature_alumni.course}</td>
                <td>{feature_alumni.contact}</td>
                <td>{feature_alumni.latinHonor}</td>
                <td>{feature_alumni.quote}</td>  
                <td>
                  <button className='feature-alumni-update-button'>Update</button>
                  <button className='feature-alumni-delete-button'>Delete</button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeatureAlumni;
