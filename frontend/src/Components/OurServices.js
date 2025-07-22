import React from 'react';
import '../Styles/ourservices.css';
import Navbar from './Navbar';
import Footer from './Footer';

import biryani from './image/biryani.jpg';         // Biryani street food
import hotel from './image/hotel.jpg';   // Hyderabad hotels
import car from './image/car.jpg';       // Cab
import heritage from './image/heritage.jpg';// Heritage tour
import citylake from './image/citylake.jpg'; // Hero image

function OurServices() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Image */}
      <div className="hero-image-container">
        <img src={citylake} alt="Hyderabad Cityscape" className="hero-image" loading="lazy" />
      </div>

      {/* Services Section */}
      <div className="services-intro">
        <h1>OUR SERVICES IN HYDERABAD</h1>
        <p>Discover curated travel services across Hyderabad—from guided culinary tours to premium transport and heritage experiences.</p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <img src={biryani} alt="Biryani & Food Tour" />
          <h5>Street Food & Biryani Tour</h5>
          <p>Explore Hyderabadi biryani, Irani cafés, and local markets with local food experts.</p>
        </div>
        <div className="service-card">
          <img src={hotel} alt="Hotel Booking" />
          <h5>Hotel & Resort Booking</h5>
          <p>Book stays in Hitech City, Charminar area, or Banjara Hills—budget to luxury.</p>
        </div>
        <div className="service-card">
          <img src={car} alt="Cab & Airport Pickup" />
          <h5>Cab & Airport Pickup</h5>
          <p>24/7 airport transfers and local rides in AC vehicles with trained drivers.</p>
        </div>
        <div className="service-card">
          <img src={heritage} alt="Heritage Tour" />
          <h5>Heritage City Tours</h5>
          <p>Visit Charminar, Golconda Fort, Birla Mandir, and local bazaars with expert guides.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default OurServices;
