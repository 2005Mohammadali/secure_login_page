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

