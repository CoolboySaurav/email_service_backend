import React, { useState } from 'react';
import { sendBulkEmails, sendEmailToNonprofit } from '../services/emailservice';

const BulkEmails = () => {
    const [emailBody, setEmailBody] = useState({
        email: '',
        subject: '',
        contentTemplate: ''
    });

    const [isBulk, setIsBulk] = useState(false);

    const handleChange = (e) => {
        setEmailBody({
            ...emailBody,
            [e.target.name]: e.target.value
        })
    };

    const handleEmailType = (e) => {
        setIsBulk(e.target.value === '1');
        if (e.target.value === '1') {
            setEmailBody({
            ...emailBody,
            email: ''
            })
        }
    };

    const handleSubmitBulkEmail = async (e) => {
        e.preventDefault();
        try{
            await sendBulkEmails(emailBody);
            alert('Bulk email sent successfully!');
            setEmailBody({
                email: '',
                subject: '',
                contentTemplate: ''
            });
        } catch(error){
            console.error('Error sending bulk email', error);
            alert('Failed to send bulk email');
        }
    };

    const handleSubmitSingleEmail = async (e) => {
        e.preventDefault();
        try{
            await sendEmailToNonprofit(emailBody);
            alert('Email sent successfully!');
            setEmailBody({
                email: '',
                subject: '',
                contentTemplate: ''
            });
        } catch(error){
            console.error('Error sending email', error);
            alert('Failed to send email');
        }
    };


    return (
        <div className="email-container" style={{
            padding: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor: '#fff'
        }}>
            <h1 style={{
                color: '#333',
                textAlign: 'center',
                marginBottom: '30px'
            }}>Send Email</h1>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: '20px'
            }}>
                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    margin: '5px',
                    padding: '0 15px 0 0'
                }}>
                    <span style={{color: '#555', fontWeight: '500'}}>To:</span>
                    <input style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '14px'
                    }} 
                    type="text"
                    name='email'
                    value={emailBody.email}
                    onChange={handleChange}
                    required={!isBulk}
                    />
                </label>
                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '0 15px 0 0'
                }}>
                    <span style={{color: '#555', fontWeight: '500'}}>Subject:</span>
                    <input style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        fontSize: '14px'
                    }} 
                    type="text"
                    name='subject'
                    value={emailBody.subject}
                    onChange={handleChange}
                    />
                </label>
                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0 15px 0 0',
                    gap: '8px'
                }}>
                    <span style={{color: '#555', fontWeight: '500'}}>Body:</span>
                    <textarea style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        minHeight: '150px',
                        fontSize: '14px',
                        resize: 'vertical'
                    }} 
                    name='contentTemplate'
                    value={emailBody.contentTemplate}
                    onChange={handleChange}
                    />
                </label>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 15px 0 0',
                    gap: '30px',
                    margin: '20px 0'
                }}>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }}>
                        <input type='radio' 
                            name='emailType' 
                            value="1"
                            onChange={handleEmailType} 
                        />
                        Bulk Email
                    </label>
                    <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                    }}>
                        <input type='radio' 
                            name='emailType' 
                            value="0" 
                            onChange={handleEmailType}
                        />
                        Single Email
                    </label>
                </div>
                <button 
                    onClick={isBulk ? handleSubmitBulkEmail : handleSubmitSingleEmail}
                    style={{
                        padding: '12px 24px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        fontWeight: '500',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default BulkEmails;