import mongoose , {Schema, model, models} from 'mongoose';
import { UserRole } from '@/types/enums';

export interface IUser {
    email : string;
    password :string;
    _id? : string;
    location? : string;
    contact : string; //mail
    createdAt? : Date;
    updatedAt? : Date;
    role : UserRole;
}

const userSchema = new Schema<IUser>({
    email : {type : String, required : true, unique :true },
    password : { type : String, required : true, },
    role : {type : String, enum : Object.values(UserRole), required : true},
    location: { type: String, required: false },
    contact: { type: String, required: false },
    
},{timestamps : true});

export const User = models?.User || model<IUser>("User" , userSchema)