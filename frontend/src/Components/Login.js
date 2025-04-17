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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handlechange = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:3007/Login", { "email": email, "password": password })
      console.log(response)
      alert(response.data)
      if (response.data === "Login successful") {
        navigate('/Home')
      }

    } catch (err) {
      console.log(err)
    }

  }
  const handleFormdata = (e) => {
    let { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };
  return (
    <div className='container'>

      <Form className='loginpage' onSubmit={handlechange}  >


        <FormGroup>
          <Label
            for="exampleEmail"
            hidden
          >
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            value={email}
           onSubmit={handleFormdata} required
            // onChange = {handleFormdata} required
            onChange={(e) => {
              setEmail(e.target.value) 
              
            }}
          />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label
            for="examplePassword"
            hidden
          >
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
            onSubmit={handleFormdata} required
            onChange={(e) => {
              setPassword(e.target.value)
            }}
           
          />
        
        </FormGroup>
        {' '}

        <Button type="Submit">
          Submit
        </Button>
        <div className='forgotregister'>
        <Link to="/Register" id="register" style={{ textDecoration: "none" }}>Register</Link>
        <Link to="forgotpassword" id="forgot" style={{ textDecoration: "none" }}>Forgot password</Link>
    </div >
      </Form >

    </div >
  )
}

export default Login