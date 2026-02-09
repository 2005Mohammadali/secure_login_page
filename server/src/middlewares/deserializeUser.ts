import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";

export async function deserializeUser(req: Request, res: Response, next: NextFunction){
    const header = req.headers.authorization;
    if(!header || !header.startsWith('Bearer ')){
        return next();
    }

    const token = header.replace(/^Bearer\s/, "").trim();
    const decoded = verifyJwt(token);
    if(decoded){
        res.locals.user = decoded;
    }
    return next();
}