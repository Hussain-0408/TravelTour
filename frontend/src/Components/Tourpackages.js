import React, { useState } from "react";
import "../Styles/Tourpackages.css";
import BookingForm from "./BookingForm";
import biryani from "./image/biryani.jpg";
import charminar from "./image/charminar.jpg";
import golconda from "./image/golconda.jpg";
import hitec from "./image/hitec.jpg";
import Ramoji from "./image/Ramoji.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Tourpackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    { id: 1, title: "Charminar & Laad Bazaar", desc: "Explore Hyderabad’s iconic Charminar and shop at Laad Bazaar.", img: charminar },
    { id: 2, title: "Golconda Fort", desc: "Discover the grandeur of Golconda Fort with evening light & sound show.", img: golconda },
    { id: 3, title: "Ramoji Film City", desc: "A full-day trip to the world’s largest film city with entertainment shows.", img: Ramoji },
    { id: 4, title: "Hitech City Tour", desc: "Modern Hyderabad with Cyber Towers, Shilparamam, and nightlife at Hitech City.", img: hitec },
    { id: 5, title: "Hyderabadi Food Tour", desc: "Taste authentic Hyderabadi Biryani, Haleem, Irani Chai & more.", img: biryani },
  ];

  return (
    <>
    <Navbar/>
      <div className="tour-container">
        {packages.map((pkg) => (
          <div className="card" style={{ width: "18rem" }} key={pkg.id}>
            <img className="card-img-top" src={pkg.img} alt={pkg.title} />
            <div className="card-body">
              <h5 className="card-title">{pkg.title}</h5>
              <p className="card-text">{pkg.desc}</p>
              <button className="btn btn-primary" onClick={() => setSelectedPackage(pkg)}>
                Book Now
              </button>
            </div>
          </div>
        ))}

        {/* Booking Popup */}
        {selectedPackage && (
          <BookingForm
            selectedPackage={selectedPackage}
            onClose={() => setSelectedPackage(null)}
          />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default Tourpackages;
