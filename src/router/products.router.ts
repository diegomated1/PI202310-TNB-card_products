import { Router } from "express";
import productsController from "../controllers/product.controller.js";0
import upload from "../middlewares/image.save.js";

class ProductsRouter {

    router:Router;

    constructor(){
        this.router = Router();
        this.config();
    }

    private config(){
        this.router.route('/product/:id_carta').get(productsController.getProductByID);
    }
}

export default new ProductsRouter();