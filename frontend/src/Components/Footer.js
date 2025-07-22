import React from 'react';
import '../Styles/footer.css';
import Icons from './Icons';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Us */}
        <div className="footer-column animate fade-in-up">
          <h3>About Us</h3>
          <p>
            Experience the timeless charm of Hyderabad – from the historic Charminar to the flavors of Hyderabadi Biryani.
            We offer curated travel experiences that celebrate the rich heritage, culture, and warmth of the City of Pearls.
          </p>
        </div>

        {/* Tours by Theme */}
        <div className="footer-column animate fade-in-up delay-1">
          <h3>Tours by Theme</h3>
          <ul>
            <li>Heritage Walks</li>
            <li>City Sightseeing</li>
            <li>Culinary Tours</li>
            <li>Shopping Tours</li>
            <li>Nightlife Experiences</li>
            <li>Religious Sites Tours</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column animate fade-in-up delay-2">
          <h3>Contact Us</h3>
          <address>
            Near Charminar, Old City<br />
            Hyderabad, Telangana 500002
          </address>
          <Icons />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 SARK Travel & Tour. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
