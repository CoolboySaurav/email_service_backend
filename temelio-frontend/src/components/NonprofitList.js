import React, { useEffect, useState } from 'react';
import { getNonprofits } from '../services/nonprofitservice';


const NonprofitList = ({refresh}) => {

    const [nonprofits, setNonprofits] = useState([]);

    const fetchNonprofits = async () => {
        try {
            const response = await getNonprofits();
            setNonprofits(response.data);
        } catch (error) {
            console.error('Error fetching nonprofits',error);
            alert("Failed to fetch nonprofits");
        }
    };

    useEffect(() => {
        fetchNonprofits();
      }, [refresh]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>Nonprofit List</h1>
            <button 
                onClick={fetchNonprofits}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#3498db',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Fetch Nonprofits
            </button>
            <table 
                style={{
                    marginTop: '20px',
                    width: '100%',
                    borderCollapse: 'collapse',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}
            > 
                <thead>
                    <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
                        <th style={{ padding: '15px', textAlign: 'left' }}>Id</th>
                        <th style={{ padding: '15px', textAlign: 'left' }}>Name</th>
                        <th style={{ padding: '15px', textAlign: 'left' }}>Address</th>
                        <th style={{ padding: '15px', textAlign: 'left' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {nonprofits.map((nonprofit) => (
                        <tr 
                            key={nonprofit.id}
                            style={{ 
                                borderBottom: '1px solid #eee',
                                ':hover': { backgroundColor: '#f5f6fa' }
                            }}
                        >
                            <td style={{ padding: '15px' }}>{nonprofit.id}</td>
                            <td style={{ padding: '15px' }}>{nonprofit.name}</td>
                            <td style={{ padding: '15px' }}>{nonprofit.address}</td>
                            <td style={{ padding: '15px' }}>{nonprofit.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NonprofitList;