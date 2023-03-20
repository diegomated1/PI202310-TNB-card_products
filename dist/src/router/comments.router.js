"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_js_1 = __importDefault(require("../controllers/comment.controller.js"));
0;
const image_save_js_1 = __importDefault(require("../middlewares/image.save.js"));
class CommentsRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.route('/product/:id_producto/comments').get(comment_controller_js_1.default.getAllComment);
        this.router.route('/image/:id_comment').get(comment_controller_js_1.default.getCommentImage);
        this.router.route('/product/:id_producto/comments').post(image_save_js_1.default.array("comment_images"), comment_controller_js_1.default.createComment);
    }
}
exports.default = new CommentsRouter();
