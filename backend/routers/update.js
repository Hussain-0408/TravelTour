let express = require("express")
let mongodb = require("mongodb")
let bcrypt = require("bcryptjs");
let client = mongodb.MongoClient;

const MONGO_URL = "mongodb://localhost:27017/project1";

let updateuser = express.Router().put("/", async (req, res) => {
    try {
        const clientConn = await client.connect(MONGO_URL);
        const db = clientConn.db("project1");
        const user = await db.collection("storedata").findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send("User not found");
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await db.collection("storedata").updateOne(
            { email: req.body.email },
            { $set: { password: hashedPassword } }
        );
        res.status(200).send("updated successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Update failed");
    }
});

module.exports = updateuser;