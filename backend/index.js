let express = require("express")
let app = express()
let bodyparser = require("body-parser")
let mongodb = require("mongodb")
let client = mongodb.MOngodbClient
let cors = require("cors")
app.use(bodyparser.json())
app.use(cors())

app.use("/login",require("./routers/Login"))
app.use("/register",require("./routers/Register"))
app.use("/fetchdata",require("./routers/fetch"))
app.use("/update",require("./routers/update"))


app.listen(3007,(req,res)=>{
    console.log("server running")
});

