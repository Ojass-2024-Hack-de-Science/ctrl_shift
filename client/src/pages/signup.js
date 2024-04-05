import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/signup', formData);
            console.log('Signup successful:', response.data);
            // Reset form fields after successful signup
            setFormData({
                username: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error scenario here
        }
    };

    return (
        <div className='main-container'>
            <div className='left-container'>ksdbvc</div>
            <div className='right-container'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='inputbox'
                            type="text"
                            placeholder='Full Name'
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='inputbox'
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='inputbox'
                            type="text"
                            placeholder='Phone Number'
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='inputbox'
                            type="password"
                            name="password"
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='inputbox'
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className='submit' type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
