import { Request, Response } from "express";
import { signJwt } from "../utils/jwt.utils";
import { validatePassword } from "../services/user.services";

export async function createSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body);

    if(!user){
        return res.status(401).json({
            msg: "Invalid email or password"
        })
    }
    
    try{
        const token = signJwt(user, {expiresIn: "3d"});
        res.cookie("accessToken", token, {
           httpOnly: true,
           maxAge: 3 * 24 * 60 * 60 * 1000,
           path: "/",
           sameSite: "lax",
           secure: false, // Set to true in production when using HTTPS
        });

        return res.send({
            msg: "Login successful",
        });
        
    }catch(e: any){
        console.error(e);
        return res.status(500).send("Internal Server Error");
    }


}

export async function deleteSessionHandler(req: Request, res: Response){
    res.cookie("accessToken", "", {
        httpOnly: true,
        maxAge: 0,
        path: "/",
        sameSite: "lax",
        secure: false, // Set to true in production when using HTTPS
    });

    return res.status(200).send({
        msg: "Succesfully Logged Out"
    })
}
