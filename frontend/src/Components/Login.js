import React, { useState } from 'react'
import { Input, Label, FormGroup, Button, Form } from 'reactstrap'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/login.css';

function Login() {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    console.log("Form data before submit:", formdata); // Debugging line

    // Ensure we have data
    if (!formdata.email || !formdata.password) {
      alert("Please fill in both email and password");
      return;
    }

    try {
      // Sending POST request to the server
      let response = await axios.post("http://localhost:3007/login", formdata);

      console.log("Response:", response); // Debugging line
      alert(response.data);

      if (response.data === "Login successful") {
        navigate('/Home');
      }

    } catch (err) {
      console.log("Error:", err); // Debugging line
    }
  };

  const handleFormdata = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  return (
    <div className='container'>
      <Form className='loginpage' onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="email" hidden>Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            value={formdata.email}
            onChange={handleFormdata}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label for="password" hidden>Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            value={formdata.password}
            onChange={handleFormdata}
            required
          />
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>

        <div className='forgotregister'>
          <Link to="/Register" id="register" style={{ textDecoration: "none" }}>Register</Link>
          <Link to="/forgotpassword" id="forgot" style={{ textDecoration: "none" }}>Forgot password</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
