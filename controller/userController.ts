import {Request,Response} from 'express';
import mongoose from 'mongoose';
import * as user from '../model/model';
import validator from '../validator/user.validation';

//controller for get all user

const getUser=async (req:Request,res:Response):Promise<any>=>
{

	try
	{
		const getUser=await user.getUser();
		res.status(200).json(getUser)
	}
	catch(err)
	{
		res.status(400).json({"Exception occured":err});

	}

}
// controller create a new user
 const createUser=async (req:Request,res:Response):Promise<any>=>
{
	let {Name,Place,Email,Age}=req.body;

	let response=validator.validateCreateUser(req.body);

	if(response.error)
	{
		res.status(400).json({"Error":response.error.details[0].message})

	}
	else
	{	try
		{
		const createUser=await user.createUser(Name,Place,Email,Age);
		res.status(200).json({Message:createUser});
		}
		catch(err)
		{
			res.status(400).json({"Exception occured":err});			
		}
	}
	
}
// controller for get particular user by name

const getUserByName=async (req:Request,res:Response):Promise<any>=>
{
	try
	{
		let name=req.query.name as string;
		const getUserByName=await user.getUserByName(name);

		res.status(200).json({User:getUserByName});

	}
	catch(err)
	{
		res.status(400).json({"Exception occured":err});			
	}
}

// controller for update Email of particular user 
const updateEmail=async (req:Request,res:Response):Promise<any>=>
{

	var userRequest={Name:req.query.name as string,Email:req.body.Email as string};

	let response=validator.validateUpdateEmail(userRequest);
	
	if(response.error)
	{
		res.status(400).json({"Error":response.error.details[0].message})

	}
	else
	{	try
		{
			const updateEmail=await user.updateEmail(userRequest.Name,userRequest.Email);
			res.status(200).json({"Message":updateEmail})	
		}
		catch(err)
		{
			res.status(400).json({"Exception occured":err});			
		}

	}

}
// controller for delete a particular user..
const deleteUser=async (req:Request,res:Response):Promise<any>=>
{	
	let Name=req.query.name as string
	try
	{
		const deleteUser=await user.deleteUser(Name);
		res.status(200).json({"Message":deleteUser})	
	}
	catch(err)
	{
		res.status(400).json({"Exception occured":err});			
	}
}
export default {getUser,createUser,getUserByName,updateEmail,deleteUser}
