const user=require("../model/user.model");
const validator=require("../validation/user.validation");
const axios=require("axios");
//controller for get all user

const getUser=async (req,res)=>
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
 const createUser=async (req,res)=>
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

const getUserByName=async (req,res)=>
{
	try
	{
		let name=req.query.name;
		const getUserByName=await user.getUserByName(name);

		res.status(200).json({User:getUserByName});

	}
	catch(err)
	{
		res.status(400).json({"Exception occured":err});			
	}
}

// controller for update Email of particular user 
const updateEmail=async (req,res)=>
{

	var userRequest={Name:req.query.name,Email:req.body.Email};

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
const deleteUser=async (req,res)=>
{	
	let Name=req.query.name;
	try
	{	let getuser=await axios.get("http://localhost:8080/aswin/getuserbyname/?name="+Name);
			if(getuser.data.User==null)
			{
						res.status(404).json({Message:"User Not Found"});
			}
			else
			{
				const deleteUser=await user.deleteUser(Name);
				res.status(200).json({"Message":deleteUser})	
			}
	}
	catch(err)
	{
		res.status(400).json({"Exception occured":err.toString()});			
	}
}
module.exports={getUser,createUser,getUserByName,updateEmail,deleteUser}