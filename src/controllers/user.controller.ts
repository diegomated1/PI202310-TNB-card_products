import { Request, Response, NextFunction } from "express";
import userModel from "../models/user.model.js";

const getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id_usuario } = req.params;
        const user = await userModel.findByPk(id_usuario);
        if (user) {
            res.status(200).json({ status: true, data: user });
        } else {
            res.status(404).json({ status: true, message: 'User not found' });
        }
    } catch (error) {
        console.log((error as Error).message);
        res.status(500).json({ status: false, message: 'Server internal error' });
    }
}

const modifyUsersById = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const params = req.params;
        const body = req.body;
        const user = await userModel.findByPk(params.id_usuario);
        if (user == null) {
            res.status(404).json({ info: 'usuario no existe' })
        } else {
            await user.update({
                coins: body.coins,
            });
            res.status(200).json({status:true, info: 'Se actualizo el usuario con exito'})
        }
    }catch(error){
        console.log(error)
        res.status(500).json({ status: false, info: 'no se actualizo el usuario' });
    }

}

export default {
    getById,
    modifyUsersById
}