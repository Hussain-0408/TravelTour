import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label, FormGroup, Input, Col, Button, Form, Row } from 'reactstrap';
import '../Styles/register.css';

function Register() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formdata.email || !formdata.password) {
        alert("Email and Password are required!");
        return;
      }

      let response = await axios.post("http://localhost:3007/Register", formdata);
      console.log(response.data);
      alert(response.data);

      setFormdata({
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""
      });

      if (response.status === 200) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again!");
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
    <div className='container1'>
      <div className='registerpage'>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formdata.email}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Enter your password"
                  type="password"
                  value={formdata.password}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="Enter your address"
                  value={formdata.address}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={10}md={5} lg={5}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input
                  id="exampleCity"
                  name="city"
                  placeholder="City"
                  value={formdata.city}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input
                  id="exampleState"
                  name="state"
                  placeholder="State"
                  value={formdata.state}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input
                  id="exampleZip"
                  name="zip"
                  placeholder="Zip"
                  value={formdata.zip}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
          </Row>

          <div className='button'>
            <Button type='submit' color="primary" block>
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
