let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let cors = require("cors");
let mongoose = require("mongoose");

app.use(bodyparser.json());
app.use(cors());

// ✅ MongoDB Connection (fix here)
mongoose.connect("mongodb://localhost:27017/travelTour")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/Login", require("./routers/Login"));
app.use("/register", require("./routers/Register"));
app.use("/fetchdata", require("./routers/Fetch"));
app.use("/update", require("./routers/update"));
app.use("/api/bookingForm", require("./routers/bookingForm"));

app.listen(3007, () => {
  console.log("server running on http://localhost:3007");
});
