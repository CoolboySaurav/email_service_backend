import { createNonprofit } from "../services/nonprofitservice";
import { updateNonprofit } from "../services/nonprofitservice";
import React, { useState } from 'react';

const NonprofitForm = ({handleRefresh}) => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    
    }

    const handleSubmitForCreation = async (e) => {
        e.preventDefault();
        try {
            await createNonprofit(formData);
            alert('Nonprofit created successfully!');
            setFormData({
                name: '',
                address: '',
                email: ''
            });
            handleRefresh();
        } catch (error) {
            console.error('Error creating nonprofit',error);
            alert("Failed to create nonprofit");
        }
    }

    const handleSubmitForUpdate = async (e) => {
        e.preventDefault();
        try {
            await updateNonprofit(formData);
            alert('Nonprofit updated successfully!');
            setFormData({
                name: '',
                address: '',
                email: ''
            });
        } catch (error) {
            console.error('Error updating nonprofit',error);
            alert("Failed to update nonprofit");
        }
    }
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h1 style={{ color: '#333', marginBottom: '20px', textAlign : 'center' }}>Nonprofit Creation Form</h1>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Name:
                        <input  type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Address:
                        <input  type="text" 
                                name="address" 
                                value={formData.address}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Email:
                        <input  type="text" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <button 
                        type="submit" 
                        onClick={handleSubmitForCreation}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Create Nonprofit
                    </button>
                </form>
            </div>
            <div style={{
                backgroundColor: '#f5f5f5',
                padding: '20px',
                borderRadius: '8px'
            }}>
                <h1 style={{ color: '#333', marginBottom: '20px' }}>Nonprofit Update Form</h1>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Name:
                        <input  type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Address:
                        <input  type="text" 
                                name="address" 
                                value={formData.address}
                                onChange={handleChange}
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        Email:
                        <input  type="text" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ddd'
                                }}
                        />
                    </label>
                    <button 
                        type="submit" 
                        onClick={handleSubmitForUpdate}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#2196F3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}
                    >
                        Update Nonprofit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NonprofitForm;
