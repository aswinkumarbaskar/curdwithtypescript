import express from 'express';
import {json} from 'body-parser';
import  mongoose from 'mongoose';
import {apiRoute} from './routes/routes';
import dotenv from 'dotenv';

dotenv.config();

const app= express();
app.use(json());
app.use("/aswin",apiRoute);

mongoose.connect(process.env.DBHOST as string,()=>{
	console.log("MongoDb Connected")
});
app.listen(process.env.PORT,()=>{
	console.log("Server Running..!");
})