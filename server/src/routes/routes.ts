import { Express, Request, Response } from "express";
import { registerUser } from "../controllers/user.controller";
import { createSessionHandler, deleteSessionHandler } from "../controllers/session.controller";
import { requireUser } from "../middlewares/requireUser";

function routes(app: Express){
    app.post('/api/v1/auth/register', registerUser);
    app.post('/api/v1/auth/sessions', createSessionHandler);
    app.get('/api/v1/me', requireUser, (req: Request, res: Response) => {
        return res.send(res.locals.user);
    });
    app.delete('/api/v1/auth/logout', requireUser, deleteSessionHandler);
}

export default routes;