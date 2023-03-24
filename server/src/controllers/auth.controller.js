import { createToken } from '../middleware/token.js'


export const getToken = async (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username && !password){
            return res.status(400).send({ status: "error", message: "username y password con requerido" });
        }
        const token = createToken(username, password);
        if(!token){
            return res.status(400).send({ status: "error", message: "username o password con invalido" });
        }
        res.status(200).send({token:token});  
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};
