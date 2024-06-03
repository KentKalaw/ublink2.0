import React from 'react';
import './RecordTable.css';

function RecordTable({ selectedTable }) {
    const registeredAlumni = [
        { id: 1, dateReg: 'April 30, 2024', name: 'Fujiyoshi Kotoko', email: 'kotoko@example.com', batchYear: '2020-2021', proof: 'View Proof', course: 'BSIT', alumcard:'Not Active', subscription: 'Subscribed' },
        { id: 2, dateReg: 'April 29, 2024', name: 'Gehlee Dangca', email: 'gehlee@example.com', batchYear: '2019-2020', proof: 'View Proof', course: 'BSIT', alumcard:'Waiting for Payment', subscription: 'Waiting for Payment' },
        { id: 3, dateReg: 'May 29, 2024', name: 'Kim Jennie', email: 'jenniekim@example.com', batchYear: '2019-2020', proof: 'View Proof', course: 'BSIT',  alumcard:'Not Active', subscription: 'Not Subscribed' },
        { id: 4, dateReg: 'May 29, 2024', name: 'Ysa Tris', email: 'tris@example.com', batchYear: '2019-2020', proof: 'View Proof', course: 'BSIT', alumcard:'Active', subscription: 'Subscribed' },
        { id: 5, dateReg: 'June 01, 2024', name: 'Bang Yunha', email: 'bangyunha@example.com', batchYear: '2021-2022', proof: 'View Proof', course: 'BSIT', alumcard:'Not Active', subscription: 'Subscribed' },
        { id: 6, dateReg: 'June 01, 2024', name: 'Kim Ji-won', email: 'jiwon@example.com', batchYear: '2021-2022', proof: 'View Proof', course: 'BSIT', alumcard:'Not Active', subscription: 'Subscribed' },
    ];

    const yearbooks = [
        { id: 1, name: 'Fujiyoshi Kotoko', email: 'kotoko@example.com', requestForm: 'View Form', paymentForm: '', status: 'Not Subscribed' },
        { id: 2, name: 'Gehlee Dangca', email: 'kotoko@example.com', requestForm: 'View Form', paymentForm: 'View Form', status: 'Waiting For Payment' },
    ];

    const alumniprivilegecard = [
        { id: 1, name: 'Fujiyoshi Kotoko', email: 'kotoko@example.com', requestForm: 'View Form', paymentForm: '', status: 'Not Active' },
        { id: 2, name: 'Gehlee Dangca', email: 'kotoko@example.com', requestForm: 'View Form', paymentForm: 'View Form', status: 'Waiting For Payment' },
    ];

    const approvals = [
        { id: 7, name: 'Elisia Parmisano', email: 'elisia@example.com', batchYear: '2019-2020', proof: 'View Proof', course: 'Bachelor of Science in Information Technology', status: 'Not Approved' },
        { id: 8, name: 'Ezatoki Nana', email: 'ezatokinana@example.com', batchYear: '2019-2020', proof: 'View Proof', course: 'Bachelor of Science in Information Technology', status: 'Not Approved'  },

    ];

    return (
        <div className="admin-record-table-container">
            {selectedTable === 'registeredAlumni' && (
                <div className="admin-record-table">
                    <h2>Registered Alumni</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date Registered</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Batch Year</th>
                                <th>Proof</th>
                                <th>Course</th>
                                <th>Privilege Card Status</th>
                                <th>Yearbook Subscription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registeredAlumni.map(alumni => (
                                <tr key={alumni.id}>
                                    <td>{alumni.id}</td>
                                    <td>{alumni.dateReg}</td>
                                    <td>{alumni.name}</td>
                                    <td>{alumni.email}</td>
                                    <td>{alumni.batchYear}</td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{alumni.proof}</a></td>
                                    <td>{alumni.course}</td>
                                    <td>{alumni.alumcard}</td>
                                    <td>{alumni.subscription}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {selectedTable === 'yearbooks' && (
                <div className="admin-record-table">
                    <h2>Yearbooks Subscription</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Request Form</th>
                                <th>Payment Form</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {yearbooks.map(yearbook => (
                                <tr key={yearbook.id}>
                                    <td>{yearbook.id}</td>
                                    <td>{yearbook.name}</td>
                                    <td>{yearbook.email}</td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{yearbook.requestForm}</a></td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{yearbook.paymentForm}</a></td>
                                    <td>{yearbook.status}</td>
                                    <td>
                            <button className='yearbook-waiting-button'>Waiting For Payment</button>
                            <button className='yearbook-subbed-button'>Subscribed</button>
                            <button className='yearbook-decline-button'>Decline</button>
                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

{selectedTable === 'alumniprivilegecard' && (
                <div className="admin-record-table">
                    <h2>Alumni Privilege Card</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Request Form</th>
                                <th>Payment Form</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumniprivilegecard.map(alumniprivilegecard => (
                                <tr key={alumniprivilegecard.id}>
                                    <td>{alumniprivilegecard.id}</td>
                                    <td>{alumniprivilegecard.name}</td>
                                    <td>{alumniprivilegecard.email}</td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{alumniprivilegecard.requestForm}</a></td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{alumniprivilegecard.paymentForm}</a></td>
                                    <td>{alumniprivilegecard.status}</td>
                                    <td>
                            <button className='privilege-waiting-button'>Waiting For Payment</button>
                            <button className='privilege-accept-button'>Subscribed</button>
                            <button className='privilege-decline-button'>Decline</button>
                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {selectedTable === 'approvals' && (
                <div className="admin-record-table">
                    <h2>Approvals</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Batch Year</th>
                                <th>Proof</th>
                                <th>Course</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvals.map(approval => (
                                <tr key={approval.id}>
                                    <td>{approval.id}</td>
                                    <td>{approval.name}</td>
                                    <td>{approval.email}</td>
                                    <td>{approval.batchYear}</td>
                                    {/* eslint-disable-next-line */}
                                    <td><a href="#">{approval.proof}</a></td>
                                    <td>{approval.course}</td>
                                    <td>{approval.status}</td>
                                    <td>
                            <button className='approval-accept-button'>Accept</button>
                            <button className='approval-decline-button'>Decline</button>
                        </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        )
    }
    
    export default RecordTable;
    