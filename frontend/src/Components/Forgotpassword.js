import React, { useState } from 'react';
import '../Styles/forgot.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.put("http://localhost:3007/update", {
        email: email,
        password: password
      });

      alert(response.data);

      if (response.status === 200) {
        navigate('/');
      }

    } catch (err) {
      console.error(err);
      alert("Error updating password");
    }
  };

  return (
    <div className='forgotcontainer'>
      <form className='forgotform' onSubmit={handleChange}>
        <h1>Email</h1>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h1>New Password</h1>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <h1>Confirm Password</h1>
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Forgotpassword;
