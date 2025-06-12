import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', credentials);
      login(res.data.token, res.data.user);
      alert(`Login success. Welcome, ${res.data.user.name}`);
      if (res.data.user.role === 'student') navigate('/student/dashboard');
      // Add navigation for faculty/admin
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
