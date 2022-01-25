import User from '../interfaces/interface';
import mongoose,{Schema} from 'mongoose';

const userSchema:Schema=new Schema({
	Name:{type:String,required:true},
	Place:{type:String,required:true},
	Email:{type:String,required:true},
	Age:{type:Number,required:true}
	},
	{timestamps:true}
	);

const model=mongoose.model<User>('USER',userSchema);

const getUser=async ()=>
{
	const user= await model.find();
	return user;
}

const createUser=async (Name:string,Place:string,Email:string,Age:number)=>
{

	const user=await new model({_id:new mongoose.Types.ObjectId(),Name,Place,Email,Age});
	user.save();
	return "User Created";
}

const getUserByName=async (Name:string)=>
{
	const user=await model.find({Name:Name});
	return user;
	
}

const updateEmail=async (Name:string,Email:string)=>
{
	const user=await model.findOneAndUpdate({Name:Name},{Email:Email});
	return "Email Updated";
		
}

const deleteUser=async (Name:string)=>
{
		const user=await model.findOneAndRemove({Name:Name});
		return "User Deleted"
}
export {getUser,createUser,getUserByName,updateEmail,deleteUser}


