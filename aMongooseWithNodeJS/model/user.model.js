const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
	Name:{type:String,required:true},
	Place:{type:String,required:true},
	Email:{type:String,required:true},
	Age:{type:Number,required:true}
	},
	{timestamps:true}
	);

const model=mongoose.model('USER',userSchema);

const getUser=async ()=>
{
	const user= await model.find();
	return user;
}

const createUser=async (Name,Place,Email,Age)=>
{

	const user=await new model({_id:new mongoose.Types.ObjectId(),Name,Place,Email,Age});
	user.save();
	return "User Created";
}

const getUserByName=async (Name)=>
{
	const user=await model.findOne({Name:Name});
	return user;
	
}

const updateEmail=async (Name,Email)=>
{
	const user=await model.findOneAndUpdate({Name:Name},{Email:Email});
	return "Email Updated";
		
}

const deleteUser=async (Name)=>
{
		const user=await model.findOneAndRemove({Name:Name});
			
			return "user deleted";


}


module.exports={getUser,createUser,getUserByName,updateEmail,deleteUser}
