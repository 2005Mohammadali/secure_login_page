import {Request, Response} from 'express';
import { createUser } from '../services/auth.services';
import { CreateUserInput } from '../schemas/auth.schema';

export async function registerUser(req: Request<CreateUserInput>, res: Response){
    try {
        const user = await createUser(req.body);
        return res.status(201).send({
            msg: `${user.firstName} ${user.lastName} registered successfully`
        });
    } catch (error: any) {
        return res.status(500).send({
            error: error.message
        });
    }
}
