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

    // password match check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // basic validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.put("http://localhost:3007/update", {
        email,
        password
      });

      alert(response.data);

      if (response.status === 200) {
        navigate('/Login'); 
      }

    } catch (err) {
      if (err.response) {
        alert(err.response.data); 
        console.error("Server Error:", err.response.data);
      } else if (err.request) {
        alert("No response from server. Try again later.");
      } else {
        alert("Unexpected error: " + err.message);
      }
    }
  };

  return (
    <div className='forgotcontainer'>
      <form className='forgotform' onSubmit={handleChange}>
        <h2>Reset Password</h2>

        <label>Email</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>New Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
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
