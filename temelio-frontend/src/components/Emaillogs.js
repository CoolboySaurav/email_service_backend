import React, { useEffect, useState } from 'react';
import { getEmails } from '../services/emailservice';

const Emaillogs = ({refresh}) => {

    const [emails, setEmails] = useState([]);

    const fetchEmails = async () => {
        try {
            const response = await getEmails();
            setEmails(response.data);
        } catch (error) {
            console.error('Error fetching emails',error);
            alert("Failed to fetch emails");
        }
    };

    useEffect(() => {
        fetchEmails();
      }, [refresh]);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleString();
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Email Logs</h1>
            <button 
                onClick={fetchEmails}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                Fetch Emails
            </button>
            <table 
                style={{
                    width: '100%',
                    marginTop: '20px',
                    borderCollapse: 'collapse',
                    backgroundColor: 'white',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}
            > 
                <thead>
                    <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Id</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Recipient Email</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Sent At</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Subject</th>
                        <th style={{ padding: '12px', textAlign: 'left' }}>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email) => (
                        <tr 
                            key={email.id}
                            style={{ 
                                borderBottom: '1px solid #ddd',
                                ':hover': { backgroundColor: '#f5f6fa' }
                            }}
                        >
                            <td style={{ padding: '12px' }}>{email.id}</td>
                            <td style={{ padding: '12px' }}>{email.recipientEmail}</td>
                            <td style={{ padding: '12px' }}>{formatDate(email.sentAt)}</td>
                            <td style={{ padding: '12px' }}>{email.subject}</td>
                            <td style={{ padding: '12px' }}>{email.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Emaillogs;