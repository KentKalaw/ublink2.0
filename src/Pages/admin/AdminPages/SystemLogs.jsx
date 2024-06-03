import React, { useState } from 'react';
import './SystemLogs.css';

function SystemLogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 10;

    const logs = [
        { user: 'User A', log: 'Logged in', dateTime: '2024-06-04 09:30:00' },
        { user: 'User B', log: 'Logged out', dateTime: '2024-06-04 10:00:00' },
        { user: 'User C', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User D', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User E', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User F', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User G', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User H', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User I', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User J', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User K', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User L', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User M', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User N', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User O', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User P', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User Q', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User R', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User S', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User T', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User U', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User V', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User W', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User X', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
        { user: 'User Y', log: 'Logged in', dateTime: '2024-06-04 11:15:00' },
        { user: 'User Z', log: 'Logged out', dateTime: '2024-06-04 11:15:00' },
    ];


    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = logs.slice(indexOfFirstLog, indexOfLastLog);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="system-logs-container">
            <h2>System Logs</h2>
            <table className='system-logs-table'>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Logs</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {currentLogs.map((log, index) => (
                        <tr key={index}>
                            <td>{log.user}</td>
                            <td>{log.log}</td>
                            <td>{log.dateTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
    <div className="pagination-container">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        <button onClick={() => paginate(currentPage + 1)} disabled={currentLogs.length < logsPerPage}>Next</button>
        <span className="showing-entries">
            Showing {indexOfFirstLog + 1} to {Math.min(indexOfLastLog, logs.length)} of {logs.length} entries
        </span>
    </div>
</div>

        </div>
    );
}

export default SystemLogs;