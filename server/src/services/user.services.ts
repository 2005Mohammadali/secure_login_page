import UserModel from '../models/user.model';
import type { UserDocument } from '../models/user.model'

export type CreateUserInput = Omit<UserDocument, '_id' | 'createdAt' | 'updatedAt'>;

export async function createUser(userData: CreateUserInput){
    try {
        const user  = await UserModel.create(userData);
        return user;
    } catch (error: any) {
        throw new Error(`Error creating user: ${error.message}`);
    }
}

export async function validatePassword({email, password}: {email: string; password: string;}): Promise<Omit<UserDocument, 'password'> | false> {
    const user = await UserModel.findOne({ email });
    if(!user){
        console.log('User not found');
        return false;
    }

    const isValid = await user.comparePassword(password);
    if(!isValid){
        console.log('Invalid password');
        return false;
    }

    return user.toJSON() as Omit<UserDocument, 'password'>;
}