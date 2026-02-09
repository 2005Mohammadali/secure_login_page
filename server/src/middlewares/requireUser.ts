import { Request, Response, NextFunction } from "express";

export async function requireUser(req: Request, res: Response, next: NextFunction){
    if (!res.locals.user) {
        return res.status(403).send({ msg: "Forbidden"});
    }else{
        return next();
    }
}