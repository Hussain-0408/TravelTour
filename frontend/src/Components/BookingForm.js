import React, { useState } from "react";
import axios from "axios";
import "../Styles/BookingFarm.css";

const BookingForm = ({ selectedPackage, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    persons: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3007/api/bookingForm", {
        name: formData.name,
        email: formData.email,
        date: formData.date,
        persons: formData.persons,
        package: selectedPackage.title, // 👈 matches backend schema
      });

      alert("✅ Booking Confirmed ");
      onClose();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to save booking. Try again.");
    }
  };

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <h2>Book: {selectedPackage.title}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="persons"
            min="1"
            value={formData.persons}
            onChange={handleChange}
          />
          <button type="submit" className="btn-submit">
            Confirm Booking
          </button>
          <button type="button" className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
