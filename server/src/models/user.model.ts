import mongoose from 'mongoose';
import * as  bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    mobileNo: number;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
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

//hashing function for password before saving
userSchema.pre<UserDocument>("save", async function(){
    if (!this.isModified("password")) {
        return;
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        throw new Error("Error" + error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password).catch(() => false);
}


const UserModel = mongoose.model<UserDocument>('User', userSchema);
export default UserModel;