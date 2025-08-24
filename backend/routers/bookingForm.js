let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let nodemailer = require("nodemailer");

// Schema
let BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  package: String,
  location: String,
  bookingId: String,
});
let Booking = mongoose.model("Booking", BookingSchema);

// ✅ Package list (map package → location)
const packageLocations = {
  "Beach Paradise": "Goa, India",
  "Mountain Adventure": "Manali, India",
  "City Lights": "Mumbai, India",
  "Royal Heritage": "Jaipur, India",
  "Backwaters Bliss": "Kerala, India",
};

// POST API
router.post("/", async (req, res) => {
  try {
    const { name, email, package } = req.body;

    // Check if package exists
    const location = packageLocations[package] || "Unknown Location";

    // Generate unique booking ID
    const bookingId = "BK" + Date.now();

    // Save to DB
    let booking = new Booking({
      name,
      email,
      package,
      location,
      bookingId,
    });
    await booking.save();

    // Send email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "althafhussaian@gmail.com",
        pass: "zguq acde vgaf vwas", // Gmail app password
      },
    });

    await transporter.sendMail({
      from: "althafhussaian@gmail.com",
      to: email,
      subject: "Booking Confirmation",
      html: `
        <h2>Booking Confirmation</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Your booking has been confirmed!</p>
        <ul>
          <li><strong>Booking ID:</strong> ${bookingId}</li>
          <li><strong>Package:</strong> ${package}</li>
          <li><strong>Location:</strong> ${location}</li>
        </ul>
        <p>📍 <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}" target="_blank">View Location on Map</a></p>
        <p>Thank you for booking with us! 🎉</p>
      `,
    });

    res.json({ message: "Booking saved and email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
