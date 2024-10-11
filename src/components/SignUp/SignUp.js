import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img className="image-placeholder" src= {require('../../images/finalbanyanlogo.JPG')} alt="BA5 Career" />
      </div>
      <div className="signup-form">
        <h1>Sign up for your Profile</h1>
        <p>We know this:  people are frustrated in looking for work.  There are too many bots, fraudulent platforms, and expensive options that don’t help.
        This is a solution that relies on you and your network of real people.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <small>Enter the email for your new Career Profile.</small>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Mobile phone number - Optional</label>
            <div className="phone-input">
              <select>
                <option>+1 US</option>
                <option>+91 IN</option>
                {/* Add more country codes as needed */}
              </select>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleChange} required />
              <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <span className="password-strength">{formData.password.length}/50</span>
          </div>
          <button type="submit" className="submit-button">Create Career Profile</button>
        </form>
        <p className="login-link">Already have a Career Profile? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
};

export default SignUp;