import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt.utils";

export async function deserializeUser(req: Request, res: Response, next: NextFunction){
    const accessToken = req.cookies.accessToken || (req.headers.authorization || "").replace(/^Bearer\s/, "").trim();

    if(!accessToken){
        return next();
    }

    const decoded = verifyJwt(accessToken);
    if(decoded){
        res.locals.user = decoded;
    }

    return next();
}