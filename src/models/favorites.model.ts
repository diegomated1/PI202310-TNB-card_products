import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IFavorites from '../interfaces/IFavorites.js';

interface FavoritesInstance extends Model<IFavorites>, IFavorites {}
type FavoritesModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): FavoritesInstance;
};

export default db.define('Favoritos', {
    id_favoritos: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.STRING},
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
}) as FavoritesModelStatic;