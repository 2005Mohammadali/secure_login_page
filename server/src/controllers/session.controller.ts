import { Request, Response } from "express";
import { signJwt } from "../utils/jwt.utils";
import { validatePassword } from "../services/user.services";

export async function createSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body);

    if(!user){
        res.status(401).json({
            msg: "Invalid email or password"
        })
    }else{
        const token = signJwt(user, {expiresIn: "3d"});
        return res.send({
            accessToken: token
        });
    }


}
