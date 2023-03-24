import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.SECRET || "RW1hbnVlbElub3N0cm96YQ==";

export const createToken = (username, password) => {
    //Get user from DB
    if(username=="einostru" && password=="Emanuel"){
        return jwt.sign({
                username,
                password
        },secret);
    }
    return "";
};

export const verifyToken = (req) => {

    if(!req.headers.authorization){
        return "token requerido";
    }
    
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, secret);

    if(Date.now() > payload.exp){
        return "token expirado";
    }

    return "";
    
};