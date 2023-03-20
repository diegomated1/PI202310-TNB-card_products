import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IProductProductUserss from '../interfaces/IProductUsers.js';

interface ProductUsersInstance extends Model<IProductProductUserss>, IProductProductUserss {}
type ProductUsersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): ProductUsersInstance;
};

export default db.define('Productos_Usuarios', {
    id_favorites: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING},
    cantidad: DataTypes.NUMBER,
    Usuario_id_usuario:{
      type:DataTypes.STRING,
      references:{
        model:'Usuario',
        key:'id_usuario'
      }
    },
    Producto_id_producto:{
        type:DataTypes.STRING,
        references:{
          model:'Producto',
          key:'id_producto'
        }
      }
}, {
    freezeTableName: true,
    timestamps: false
}) as ProductUsersModelStatic;