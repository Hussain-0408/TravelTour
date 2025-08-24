let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let nodemailer = require("nodemailer");

// Schema
let BookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
let Booking = mongoose.model("Booking", BookingSchema);

// POST API
router.post("/", async (req, res) => {
  try {
    let booking = new Booking(req.body);
    await booking.save();

    // Send email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "althafhussaian@gmail.com",   // 👈 your Gmail
        pass: "zguq acde vgaf vwas",       // 👈 your Gmail App Password
      },
    });

    await transporter.sendMail({
      from: "althafhussaian@gmail.com",
      to: req.body.email,
      subject: "Booking Confirmation",
      text: `Hi ${req.body.name}, your booking was received!`,
    });

    res.json({ message: "Booking saved and email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
