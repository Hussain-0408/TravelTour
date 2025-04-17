import React from 'react'
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import '../Styles/icons.css'


function Icons() {
  return (
    <div>
      <a href ="/https://www.facebook.com/althaf.hussaian.7"><SiFacebook className='icons' /></a>
    <a href='https://www.instagram.com/althaf8_official/'><FaInstagram  className='icons'/></a>
    </div>
  )
}

export default Icons
