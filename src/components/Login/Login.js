import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted with:', { email, password, stayLoggedIn });
  };

  return (
    
    <div className="login-container">
      <div className="login-container"></div>
      <h1>Career Profile</h1>
      <h2>Log in to Career Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              <Eye size={20} /> Show
            </span>
          </div>
          <span className="password-length">{password.length}/50</span>
        </div>
        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={(e) => setStayLoggedIn(e.target.checked)}
          />
          <label htmlFor="stayLoggedIn">Stay logged in</label>
        </div>
        <button type="submit" className="login-button">Log in</button>
      </form>
      <div className="links">
        <a href="/reset-password">Reset password</a>
        <p>Don't have a Career Profile? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Login;