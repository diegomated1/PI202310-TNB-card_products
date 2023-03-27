"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_db_js_1 = __importDefault(require("../database/mysql.db.js"));
exports.default = mysql_db_js_1.default.define('Usuario', {
    id_usuario: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING
    },
    coins: sequelize_1.DataTypes.NUMBER,
}, {
    freezeTableName: true,
    timestamps: false
});
