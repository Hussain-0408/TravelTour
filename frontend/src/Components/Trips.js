import React from 'react';
import { Link } from 'react-router-dom';
import image5 from './image/image5.jpg';
import car from './image/car.jpg';
import operator from './image/operator.jpg';
import hotel from './image/hotel.jpg';
import house from './image/house.webp';
import mountimg from './image/mountimg.jpg';
import sikking from './image/skking.jpg';
import sight from './image/sightseeing.jpg';
import hourse from './image/hourse.jpg';
import trikking from './image/trikking.jpg';
import '../trips.css';

function Trips() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={image5} className="hero-image" alt="Mountain View" />
        <div className="hero-content">
          <h1>WELCOME TO TRIPS AND TOURS</h1>
          <p>At Trips and Tours, we specialize in crafting unforgettable travel experiences to the enchanting region of Kashmir...</p>
          <Link to="/AboutUs" className="find-more-btn">Find out more</Link>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="our-services">
        <h1 className="section-title">Our Services</h1>
        <p className="section-subtitle">The trips that travelers are looking for local guides or experts...</p>

        <div className="service-grid">
          <div className="service-card">
            <img src={operator} alt="Tour Operators" />
            <h5>Tour Operators</h5>
            <p>Leading tour operators in Jammu & Kashmir...</p>
          </div>
          <div className="service-card">
            <img src={car} alt="Car Rental" />
            <h5>Car & Coach Rental</h5>
            <p>Explore with the best car & coach rental services...</p>
          </div>
          <div className="service-card">
            <img src={house} alt="Houseboat Booking" />
            <h5>Houseboat Booking</h5>
            <p>Luxury stays on houseboats with scenic views...</p>
          </div>
          <div className="service-card">
            <img src={hotel} alt="Hotel Booking" />
            <h5>Hotel Booking</h5>
            <p>Find the best hotels with ease...</p>
          </div>
        </div>

        <div className="view-services">
          <Link to="/OurServices">View All Services</Link>
        </div>
      </div>

      {/* Tours By Theme */}
      <div className="tour-theme">
        <h1 className="section-title">TOURS BY THEME</h1>
        <div className="theme-grid">
          <div className="theme-card"><img src={mountimg} alt="Mountaineering" /><h5>Mountaineering Tours</h5></div>
          <div className="theme-card"><img src={house} alt="Houseboat" /><h5>Houseboat Tours</h5></div>
          <div className="theme-card"><img src={sight} alt="Sightseeing" /><h5>Sightseeing Tours</h5></div>
          <div className="theme-card"><img src={trikking} alt="Trekking" /><h5>Trekking Tours</h5></div>
          <div className="theme-card"><img src={sikking} alt="Skiing" /><h5>Skiing Tours</h5></div>
          <div className="theme-card"><img src={hourse} alt="Horse Riding" /><h5>Horse Riding</h5></div>
        </div>
      </div>
    </div>
  );
}

export default Trips;
