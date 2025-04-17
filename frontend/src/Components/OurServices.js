import React from 'react';
import '../Styles/ourservices.css';
import Navbar from './Navbar';
import house from './image/house.webp';
import hotel from './image/hotel.jpg';
import car from './image/car.jpg';
import operator from './image/operator.jpg';
import Footer from './Footer';
import image1 from './image/image1.jpg'; // New uploaded image

function OurServices() {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Hero Image */}
      <div>
        <img className="hero-image" src={image1} alt="Scenic Mountain View" />
      </div>

      {/* Services Section */}
      <div className="anotherourservices">
        <h1>OUR SERVICES</h1>
        <p>The trips that travelers are looking for local guides or experts for them..</p>
      </div>

      {/* Houseboat Booking */}
      <div className="anotheroperator">
        <img src={house} alt="Houseboat" />
        <div className="hotelbooking">
          <h5 style={{ color: "red" }}>Houseboat Booking</h5>
          <p>Enjoy a luxurious stay in a houseboat with breathtaking views.</p>
        </div>
      </div>

      {/* Hotel Booking */}
      <div className="anotheroperator">
        <div className="hotelbooking">
          <h5 style={{ color: "green" }}>Hotel Booking</h5>
          <p>Experience premium hospitality with our exclusive hotel deals.</p>
        </div>
        <img src={hotel} alt="Hotel" />
      </div>

      {/* Car Rental */}
      <div className="anotheroperator">
        <img src={car} alt="Car Rental" />
        <div className="carhotelbooking">
          <h5 style={{ color: "orange" }}>Car & Coach Rental</h5>
          <p>Travel comfortably with our reliable car and coach rentals.</p>
        </div>
      </div>

      {/* Tour Operators */}
      <div className="anotheroperator">
        <div className="hotelbooking">
          <h5 style={{ color: "blue" }}>Tour Operators</h5>
          <p>Discover the beauty of Kashmir with our experienced guides.</p>
        </div>
        <img src={operator} alt="Tour Operators" />
      </div>

      <Footer />
    </div>
  );
}

export default OurServices;
