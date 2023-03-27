"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_db_js_1 = __importDefault(require("../database/mysql.db.js"));
exports.default = mysql_db_js_1.default.define('Detalles_Comentario', {
    id_detalles_comentario: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    comentario: sequelize_1.DataTypes.STRING,
    fecha_comentario: sequelize_1.DataTypes.STRING,
    Seccion_Comentario_id_comentario: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'Seccion_Comentario',
            key: 'id_seccion_comentario'
        }
    },
}, {
    freezeTableName: true,
    timestamps: false
});
