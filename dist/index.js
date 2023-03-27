"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const comments_router_js_1 = __importDefault(require("./router/comments.router.js"));
const user_router_js_1 = __importDefault(require("./router/user.router.js"));
const products_router_js_1 = __importDefault(require("./router/products.router.js"));
var cookieParser = require('cookie-parser');
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.start();
    }
    config() {
        this.app.use((0, cors_1.default)({
            origin: process.env.CLIENT_HOST || '*',
            credentials: true
        }));
        this.app.use(express_1.default.json());
        this.app.use(cookieParser());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(cookieParser());
    }
    routes() {
        //this.app.use(informesRouter.router);
        this.app.use(user_router_js_1.default.router);
        this.app.use(comments_router_js_1.default.router);
        this.app.use(products_router_js_1.default.router);
    }
    start() {
        this.app.listen(parseInt(process.env.API_PORT), process.env.API_HOST, () => {
            console.log(`Listen on http://${process.env.API_HOST}:${process.env.API_PORT}/`);
        });
    }
}
new Server();
