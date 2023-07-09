import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Footer from './Footer';
import userData from './userData';
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!name) {
      validationErrors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      validationErrors.name = 'Name can include alphabets only';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password needs to be at least 6 characters';
    }

    if (Object.keys(validationErrors).length === 0) {
      const emailExists = userData.find((user) => user.email === email);

      if (!emailExists) {
        // Email is available, proceed with registration
        collectData();
      } else {
        // Email is already in use, display error
        setErrors({ email: 'Email is already in use' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const collectData = () => {
    console.warn(name, email, password);
    const newUser = { name, email, password };

    userData.push(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/login');
  };

  return (
    <div className="Sign-up-container">
      <div className="Signup">
        <h1>Add New User</h1>
        <input
          type="text"
          className="inputs"
          placeholder="Your Name"
          maxLength={80}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
        <input
          type="text"
          className="inputs"
          placeholder="Your email"
          maxLength={80}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          className="inputs"
          placeholder="Password"
          maxLength={80}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
        <button className="signUpButton" type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
