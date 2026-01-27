import {Request, Response} from 'express';
import { createUser } from '../services/auth.services';
import { CreateUserInput } from '../schemas/auth.schema';

export async function registerUser(req: Request, res: Response) {
  try {
    console.log("1. Request received in controller"); // <--- Breadcrumb 1

    const user = await createUser(req.body); // <--- This calls the service
    
    console.log("2. User created in DB:", user); // <--- Breadcrumb 2

    return res.send(user);
  } catch (e: any) {
    console.error("3. ERROR:", e); // <--- Error Breadcrumb
    return res.status(409).send(e.message);
  }
}
