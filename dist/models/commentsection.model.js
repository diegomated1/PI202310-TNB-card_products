"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_db_js_1 = __importDefault(require("../database/mysql.db.js"));
exports.default = mysql_db_js_1.default.define('Seccion_Comentario', {
    id_seccion_comentario: {
        primaryKey: true,
        autoIncrement: true,
        type: sequelize_1.DataTypes.STRING
    },
    Usuario_id_usuario: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'Usuario',
            key: 'id_usuario'
        }
    },
    Valoracion: sequelize_1.DataTypes.NUMBER,
    Producto_id_producto: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'Producto',
            key: 'id_producto'
        }
    }
}, {
    freezeTableName: true,
    timestamps: false
});
