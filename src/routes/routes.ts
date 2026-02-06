import { Express, Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";
import { createSessionHandler } from "../controllers/session.controller";

function routes(app: Express){
    app.post('/api/v1/auth/register', registerUser);
    app.post('/api/v1/auth/sessions', createSessionHandler);
}

export default routes;