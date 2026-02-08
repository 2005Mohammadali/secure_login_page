import { Express, Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";
import { createSessionHandler } from "../controllers/session.controller";
import { requireUser } from "../middlewares/requireUser";

function routes(app: Express){
    app.post('/api/v1/auth/register', registerUser);
    app.post('/api/v1/auth/sessions', createSessionHandler);
    app.get('/api/v1/me', requireUser, (req: Request, res: Response) => {
        return res.send(res.locals.user);
    });
}

export default routes;