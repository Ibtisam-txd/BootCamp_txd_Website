import { User } from "../models/user.model.js";
import jwt, { decode }  from "jsonwebtoken";

const verifyToken = (req,res,next) => {
    const token =  req.Headers['authorization'];
    if(!token){
        return res.status(401).json({error: "Unauthorized"})
    }

    jwt.verify(token, 'secret', (err, decoded) =>{
        if(err){
            return res.status(401).json({error: "Unauthorized"})
        }
        req.user = decoded;
        next();
    });

};

export default verifyToken;