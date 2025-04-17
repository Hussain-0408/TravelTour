import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Label, FormGroup, Input, Col, Button, Form, Row } from 'reactstrap'
import '..?Styles/register.css'

function Register() {
  const navigate = useNavigate()
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    zip: ""

  })

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:3007/Register", formdata)
      console.log(response.data)
      alert(response.data)
      setFormdata("")
      if (response.status === 200) {
        navigate('/')
      }
      setFormdata({
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zip: ""

      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormdata = (e) => {
    const { name, value } = e.target
    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  return (
    <div className='container1'>
      <div className='registerpage'>
        <Form onSubmit={handlesubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="email"
                  type="email"
                  value={formdata.email}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Password
                </Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password "
                  type="password"
                  value={formdata.password}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">
              Address
            </Label>
            <Input
              id="exampleAddress"
              name="address"
              value={formdata.address}
              onChange={handleFormdata}
            />
          </FormGroup>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">
                  City
                </Label>
                <Input
                  id="exampleCity"
                  name="city"
                  value={formdata.city}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">
                  State
                </Label>
                <Input
                  id="exampleState"
                  name="state"
                  value={formdata.state}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="exampleZip">
                  Pincode
                </Label>
                <Input
                  id="exampleZip"
                  name="zip"
                  value={formdata.zip}
                  onChange={handleFormdata}
                />
              </FormGroup>
            </Col>
          </Row>
          <div className='button'>

            <Button type='submit'  >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Register