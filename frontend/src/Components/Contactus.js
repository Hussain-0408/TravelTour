import React, { useState } from 'react';
import '../Styles/contactus.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import image7 from './image/image7.jpg';

function Contactus() {
  const [formdata, setFormdata] = useState({
    text: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3007/Register", formdata);
      console.log(response);
      alert(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormdata = (e) => {
    let { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  return (
    <div className="contact-container">
      {/* Navbar */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div className="hero-image">
              <img src={image7} alt="Gallery Cover" className="hero-image" />
            </div>

      {/* Contact Form Section */}
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h1>REACH US</h1>
          <p>📍 Mahabubnagar, Gandhichowk, 509130</p>
          <p>📞 +91-7569433273</p>
          <Link to="mailto:althafhussaian@gmail.com" className="email-link">
            ✉️ althafhussaian@gmail.com
          </Link>
        </div>

        {/* Form Section */}
        <form className="contact-form" onSubmit={handlesubmit}>
          <input type="text" placeholder="Name" name="text" value={formdata.text} onChange={handleFormdata} required />
          <input type="email" placeholder="Email" name="email" value={formdata.email} onChange={handleFormdata} required />
          <input type="text" placeholder="Phone No" name="phone" value={formdata.phone} onChange={handleFormdata} required />
          <input type="text" placeholder="Package" name="package" value={formdata.package} onChange={handleFormdata} required />
          <textarea placeholder="Write a Message" name="message" value={formdata.message} onChange={handleFormdata} required></textarea>
          
          <button type="submit" className="submit-btn">Submit Your Query</button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contactus;
