import React, { useState } from 'react'
import '../Styles/forgot.css'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

function Forgotpassword() {
  const[password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const navigate = useNavigate()
     const handlechange =async(e)=>{
       e.preventDefault();
       try{
        const response = await axios.put("http://localhost:3007/update",{"password":password , "email":email})
        console.log(response)
        alert(response.data)
        if (response.status===200){ 
          navigate('/')
        }
       }catch(err){
        console.log(err)
       }
   }
  return (
    <div>
        <div className='forgotcontainer'>
            <form className='forgotform' onSubmit={handlechange}>
              <h1>Email</h1>
              <input type=' email' name='email' 
                value = {email}
                onChange = {(e)=>{
                  setEmail(e.target.value)
                }}
                />
              
                <h1>New password</h1>
                <input type='password' name= "password" placeholder=''
                  value = {password}
                  onChange = {(e)=>{
                    setPassword(e.target.value)
                  }}
                  
                />
                <h1>
                  Confirm password
                </h1>
                <input type=' password' name = "password" placeholder=''
                  value = {password}
                  onChange = {(e)=>{
                    setPassword(e.target.value)
                  }}
                />
                <button type='submit'><h1 style={{marginLeft:"0rem"}}>submit</h1></button>
            </form>
        </div>
    </div>
  )
}

export default Forgotpassword