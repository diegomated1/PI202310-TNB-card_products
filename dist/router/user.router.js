"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_js_1 = __importDefault(require("../controllers/user.controller.js"));
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.route('/user/:id_usuario').get(user_controller_js_1.default.getById);
        this.router.route('/user/:id_usuario').put(user_controller_js_1.default.modifyUsersById);
    }
}
exports.default = new UserRouter();
