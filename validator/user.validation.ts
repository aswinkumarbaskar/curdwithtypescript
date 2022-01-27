import joi from 'joi';

// Schema_function create user
const validateCreateUser=function validate(user:string)
{
	const joiSchema=joi.object({
		Name:joi.string().required(),
		Place:joi.string().required(),
		Email:joi.string().required(),
		Age:joi.string().regex(/^([0-9])+$/).min(1).max(2).required()
	}).options({abortEarly:false});
	return joiSchema.validate(user);
}

// Schema_function update Email
const validateUpdateEmail=function validate(user:any)
{
	const joiSchema=joi.object({
		Name:joi.string().required(),
		Email:joi.string().required()
	}).options({abortEarly:false});
	return joiSchema.validate(user);
}


export default {validateCreateUser,validateUpdateEmail}
