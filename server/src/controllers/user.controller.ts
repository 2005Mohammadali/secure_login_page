import {Request, Response} from 'express';
import { createUser } from '../services/user.services';
import { CreateUserInput } from '../schemas/auth.schema';

export async function registerUser(req: Request, res: Response) {
  try {
    const user = await createUser(req.body); // <--- This calls the service
    return res.send(user);
    // console.log("2. User created in DB:", user);  <--- Breadcrumb 2
  } catch (e: any) {
    console.error("3. ERROR:", e); // <--- Error Breadcrumb
    return res.status(409).send(e.message);
  }
}
