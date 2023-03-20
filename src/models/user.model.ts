import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IUser from '../interfaces/IUsers.js';

interface UserInstance extends Model<IUser>, IUser {}
type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserInstance;
};

export default db.define('Usuario', {
    id_usuario: {
      primaryKey: true,
      type: DataTypes.STRING},
    coins: DataTypes.NUMBER,
}, {
    freezeTableName: true,
    timestamps: false
}) as UserModelStatic;