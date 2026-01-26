import mongoose from 'mongoose';

export interface UserDocument extends mongoose.Document {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    mobileNo: number;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobileNo: {type: Number},
    },
    {
        timestamps: true,
    }
);

//hashing function can be added here for password before saving

const UserModel = mongoose.model<UserDocument>('User', userSchema);
export default UserModel;