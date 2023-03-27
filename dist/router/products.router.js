"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_js_1 = __importDefault(require("../controllers/product.controller.js"));
0;
class ProductsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.route('/product/:id_carta').get(product_controller_js_1.default.getProductByID);
    }
}
exports.default = new ProductsRouter();
