import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userData from './userData';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!password) {
      errors.password = 'Password is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      handleLogin();
    }
  };

  const handleLogin = () => {
    const user = userData.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem(
        'userData',
        JSON.stringify({ email: user.email, name: user.name, id: user.id })
      );
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    alert('Sign up');
    navigate('/signup');
  };

  return (
    <div className="Login">
      <h1>Please Login Here</h1>
      <input
        type="text"
        className="input"
        placeholder="Email"
        value={email}
        maxLength={80}
        onChange={handleEmailChange}
      />
      {errors.email && <span className="error">&nbsp;{errors.email}</span>}
      <input
        type="password"
        className="input"
        placeholder="Password"
        value={password}
        maxLength={80}
        onChange={handlePassChange}
      />
      {errors.password && <span className="error">&nbsp;{errors.password}</span>}
      <button type="button" className="button-login" onClick={handleSubmit}>
        Login
      </button>
      <div>
        Don't have an account?{' '}
        <button type="button" className="button-signup" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
