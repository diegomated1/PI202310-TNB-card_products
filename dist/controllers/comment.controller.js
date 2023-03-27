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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const mysql_db_js_1 = __importDefault(require("../database/mysql.db.js"));
const commentsection_model_js_1 = __importDefault(require("../models/commentsection.model.js"));
const commentdetails_model_js_1 = __importDefault(require("../models/commentdetails.model.js"));
const commentimage_model_js_1 = __importDefault(require("../models/commentimage.model.js"));
const createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${anio}`;
    console.log(fechaFormateada);
    try {
        const { id_usuario, comentario, valoracion } = req.body;
        const { id_producto } = req.params;
        var commentSeccion = yield commentsection_model_js_1.default.findOne({
            where: {
                Producto_id_producto: id_producto,
                Usuario_id_usuario: id_usuario,
            }
        });
        if (!commentSeccion) {
            commentSeccion = yield commentsection_model_js_1.default.create({
                Usuario_id_usuario: id_usuario,
                Producto_id_producto: id_producto,
                Valoracion: valoracion,
            });
        }
        var commentdetails = yield commentdetails_model_js_1.default.create({
            comentario: comentario,
            fecha_comentario: fechaFormateada,
            Seccion_Comentario_id_comentario: commentSeccion.id_seccion_comentario,
        });
        req.files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
            var id_image = path_1.default.parse(file.filename).name;
            yield commentimage_model_js_1.default.create({
                Detalles_Comentario_idDetalles_Comentario: commentdetails.id_detalles_comentario,
                Imagene_comentario: id_image,
            });
        }));
        res.status(200).json({ status: true, });
    }
    catch (error) {
        console.log(error),
            res.status(500).json({ status: false, message: 'Server internal error' });
    }
});
const getCommentImage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_comment } = req.params;
        var route = path_1.default.join(__dirname, `../../../uploads/comment_images/${id_comment}.jpg`);
        fs_1.default.open(route, 'r', (err, df) => {
            if (err)
                res.status(404).json({ error: 0, message: "Image not found" });
            else {
                res.sendFile(route);
            }
        });
    }
    catch (error) {
        res.status(500).json({ error: 1, status: false });
    }
});
const getAllComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_producto } = req.params;
    try {
        const seccioncomments = yield mysql_db_js_1.default.query('CALL get_comments(:_id_seccion_comentario)', { replacements: { _id_seccion_comentario: id_producto } });
        if (seccioncomments) {
            res.status(200).json({ error: 0, status: true, comments: seccioncomments });
        }
        else {
            res.status(400).json({ error: 0, status: true, message: 'No hay seccion de comentarios' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 0, status: false, message: 'Server internal error.' });
    }
});
exports.default = {
    createComment,
    getCommentImage,
    getAllComment,
};
