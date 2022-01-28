const express =require("express");
const bodyparser=require("body-parser");
const mongoose=require("mongoose");
const apiRoute =require("./routes/user.route");
const dotenv =require("dotenv").config();

const app= express();
app.use(bodyparser.json());
app.use("/aswin",apiRoute.router);

mongoose.connect(process.env.DBHOST,()=>{
	console.log("MongoDb Connected")
});
app.listen(process.env.PORT,()=>{
	console.log("Server Running...!");
})