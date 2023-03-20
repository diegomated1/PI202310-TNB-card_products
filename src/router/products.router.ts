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

        this.router.route('/product/:id_producto').get(productsController.getProduct);
    }
}

export default new ProductsRouter();