import { Express, Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";

function routes(app: Express){
    app.post('/api/v1/auth/register', registerUser);
}

export default routes;