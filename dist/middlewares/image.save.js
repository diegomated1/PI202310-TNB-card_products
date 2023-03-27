"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const uniqid_1 = __importDefault(require("uniqid"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/comment_images');
        },
        filename: function (req, file, cb) {
            var id_producto = uniqid_1.default.process();
            cb(null, `${id_producto}.jpg`);
        }
    })
});
exports.default = (upload);
