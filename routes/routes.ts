import express from 'express';
import apiController from '../controller/userController';

const router=express.Router();
//URL for Get All User
router.get("/getuser",apiController.getUser);
//Url For create User
router.post("/createuser",apiController.createUser);
// Url for Get User by Name..
router.get("/getuserbyname",apiController.getUserByName);
//Url For Update Email Of Particular user by name..
router.put("/updateemail",apiController.updateEmail);
//Url for Delete User
router.delete("/deleteuser",apiController.deleteUser);
export {router as apiRoute}