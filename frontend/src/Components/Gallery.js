import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import hotel from './image/hotel.jpg';
import mountain from './image/mountain.jpg';
import mountimg from './image/mountimg.jpg';
import skking from './image/skking.jpg';
import image4 from './image/image4.jpg';
import '../Styles/gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      {/* Navbar */}
      <div className="navbar-container">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="gallery-hero">
        <img src={image4} alt="Gallery Cover" className="hero-image" />
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        <img src={hotel} alt="Hotel" />
        <img src={mountain} alt="Mountain" />
        <img src={mountimg} alt="Mountains" />
        <img src={skking} alt="Skiing" />
        <img src="https://kashmirtripsandtours.com/wp-content/uploads/2023/08/HOUSE-BOAT-TOURS.jpg" alt="Houseboat" />
        <img src="https://kashmirtripsandtours.com/wp-content/uploads/2023/08/kashmir.jpg" alt="Kashmir View" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Gallery;
