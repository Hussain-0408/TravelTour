let express = require("express")
let mongodb = require("mongodb")
let bcrypt = require("bcryptjs");
let client = mongodb.MongoClient

const MONGO_URL = "mongodb://localhost:27017/project1";

let register = express.Router().post("/", async (req, res) => {
    try {
        const clientConn = await client.connect(MONGO_URL);
        const db = clientConn.db("project1");
        const existingUser = await db.collection("storedata").findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send("Email already registered");
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const userToInsert = { ...req.body, password: hashedPassword };
        await db.collection("storedata").insertOne(userToInsert);
        res.status(200).send("Registered successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Registration failed");
    }
});

module.exports = register;