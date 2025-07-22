import React from 'react';
import { Link } from 'react-router-dom';
import hyderabadImg from './image/hyderabadImg.jpg';
import charminar from './image/charminar.jpg';
import golconda from './image/golconda.jpg';
import biryani from './image/biryani.jpg';
import lake from './image/lake.jpg';
import temple from './image/temple.jpg';
import market from './image/market.jpg';
import operator from './image/operator.jpg';
import car from './image/car.jpg';
import hotel from './image/hotel.jpg';
import house from './image/house.jpg';
import '../Styles/trips.css';

function Trips() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">
        <img src={hyderabadImg} className="hero-image" alt="Hyderabad Cityscape" loading="lazy" />
        <div className="hero-content">
          <h1>Discover the Best of Hyderabad</h1>
          <p>From centuries-old landmarks to world-famous biryani, Hyderabad offers a magical blend of history, culture, and culinary delight. Experience the city like never before.</p>
          <Link to="/AboutUs" className="find-more-btn">Find out more</Link>
        </div>
      </div>

      {/* Featured Attractions */}
      <div className="featured-attractions">
        <h2 className="section-title">Top Attractions in Hyderabad</h2>
        <div className="attraction-grid">
          <div className="attraction-card">
            <img src={charminar} alt="Charminar" loading="lazy" />
            <h5>Charminar</h5>
          </div>
          <div className="attraction-card">
            <img src={golconda} alt="Golconda Fort" loading="lazy" />
            <h5>Golconda Fort</h5>
          </div>
          <div className="attraction-card">
            <img src={lake} alt="Hussain Sagar Lake" loading="lazy" />
            <h5>Hussain Sagar Lake</h5>
          </div>
          <div className="attraction-card">
            <img src={market} alt="Laad Bazaar" loading="lazy" />
            <h5>Laad Bazaar</h5>
          </div>
          <div className="attraction-card">
            <img src={temple} alt="Birla Mandir" loading="lazy" />
            <h5>Birla Mandir</h5>
          </div>
          <div className="attraction-card">
            <img src={biryani} alt="Hyderabadi Biryani" loading="lazy" />
            <h5>Hyderabadi Cuisine</h5>
          </div>
        </div>
        <div className="view-more">
          <Link to="/Attractions">View All Attractions</Link>
        </div>
      </div>

      {/* Services Section */}
      {/* Our Services */}
      <div className="our-services">
        <h2 className="section-title">Our Services in Hyderabad</h2>
        <p className="section-subtitle">
          Explore the City of Nizams with curated services designed to give you the best travel experience.
        </p>
        <div className="service-grid">
          <div className="service-card">
            <img src={car} alt="Airport Pickup & Cab Service" loading="lazy" />
            <h5>Airport Pickup & Cab Booking</h5>
            <p>24/7 pickup & drop from RGIA Airport to anywhere in Hyderabad. Clean, A/C vehicles with professional drivers.</p>
          </div>
          <div className="service-card">
            <img src={hotel} alt="Luxury Hotel Booking" loading="lazy" />
            <h5>Hotel & Resort Bookings</h5>
            <p>We book luxury stays, business hotels, and budget lodges across Banjara Hills, Hitech City, and Charminar area.</p>
          </div>
          <div className="service-card">
            <img src={operator} alt="Guided City Tour" loading="lazy" />
            <h5>Heritage City Tours</h5>
            <p>Experience Hyderabad's rich culture with guided tours to Charminar, Chowmahalla Palace, and Mecca Masjid.</p>
          </div>
          <div className="service-card">
            <img src={house} alt="Food & Biryani Tour" loading="lazy" />
            <h5>Biryani & Street Food Walk</h5>
            <p>Explore Hyderabad's iconic biryani joints, Irani chai cafés, and night food bazaars with local food experts.</p>
          </div>
          <div className="service-card">
            <img src={temple} alt="Religious & Pilgrimage Tours" loading="lazy" />
            <h5>Pilgrimage Tours</h5>
            <p>Visit Birla Mandir, Chilkur Balaji Temple, and historic mosques with seamless transport and guides.</p>
          </div>
          <div className="service-card">
            <img src={market} alt="Shopping Tours" loading="lazy" />
            <h5>Laad Bazaar & Pearl Shopping</h5>
            <p>Personal shopping assistance for bangles, pearls, and handicrafts in the vibrant old city markets.</p>
          </div>
        </div>
        <div className="view-services">
          <Link to="/OurServices">View All Services</Link>
        </div>
      </div>

    </div>


  );
}

export default Trips;
