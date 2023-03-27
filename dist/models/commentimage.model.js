"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_db_js_1 = __importDefault(require("../database/mysql.db.js"));
exports.default = mysql_db_js_1.default.define('Imagenes_Comentario', {
    id_imagenes_comentario: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    Imagene_comentario: sequelize_1.DataTypes.STRING,
    Detalles_Comentario_idDetalles_Comentario: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'Detalles_Comentario',
            key: 'id_detalles_comentario'
        }
    },
}, {
    freezeTableName: true,
    timestamps: false
});
