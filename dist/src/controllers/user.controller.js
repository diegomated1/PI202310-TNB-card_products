"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_js_1 = __importDefault(require("../models/user.model.js"));
const getById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_usuario } = req.params;
        const user = yield user_model_js_1.default.findByPk(id_usuario);
        if (user) {
            res.status(200).json({ status: true, data: user });
        }
        else {
            res.status(404).json({ status: true, message: 'User not found' });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ status: false, message: 'Server internal error' });
    }
});
const modifyUsersById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const params = req.params;
        const body = req.body;
        const user = yield user_model_js_1.default.findByPk(params.id_usuario);
        if (user == null) {
            res.status(404).json({ info: 'usuario no existe' });
        }
        else {
            yield user.update({
                coins: body.coins,
            });
            res.status(200).json({ status: true, info: 'Se actualizo el usuario con exito' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: false, info: 'no se actualizo el usuario' });
    }
});
exports.default = {
    getById,
    modifyUsersById
};
