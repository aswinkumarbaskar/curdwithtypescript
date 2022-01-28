import {Document} from 'mongoose';

export default interface  User extends Document
{
	Name:string;
	Place:string;
	Email:string;
	Age:number;

}