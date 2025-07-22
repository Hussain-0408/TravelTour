let express = require("express");
let mongodb = require("mongodb");
let bcrypt = require("bcryptjs");
let client = mongodb.MongoClient;

const MONGO_URL = "mongodb://localhost:27017/project1";

let login = express.Router().post("/", async (req, res) => {
    console.log("🔥 Login endpoint hit");
    console.log("📥 Request body:", req.body);

    try {
        const clientConn = await client.connect(MONGO_URL);
        const db = clientConn.db("project1");

        const user = await db.collection("storedata").findOne({ email: req.body.email });

        if (!user) {
            console.log("❌ User not found");
            return res.status(200).send("User doesn't exist");
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (isMatch) {
            console.log("✅ Password matched");
            return res.status(200).send("Login successful");
        } else {
            console.log("❌ Invalid password");
            return res.status(200).send("Invalid Password");
        }
    } catch (err) {
        console.error("💥 Login error:", err);
        return res.status(500).send("Login failed");
    }
});

module.exports = login;
