import { Router } from "express";
import userController from "../controllers/user.controller.js";

class UserRouter {

    router:Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config(){
        this.router.route('/user/:id_usuario').get(userController.getById);
        this.router.route('/user/:id_usuario').put(userController.modifyUsersById);
    }
}

export default new UserRouter();