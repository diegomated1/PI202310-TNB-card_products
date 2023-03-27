import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IDeck from '../interfaces/IDeck.js';

interface DeckInstance extends Model<IDeck>, IDeck {}
type DeckModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): DeckInstance;
};

export default db.define('deck', {
    id_deck: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.NUMBER
    },
    id_usuario:{
      type:DataTypes.STRING,
      references:{
        model:'Usuario',
        key:'id_usuario'
      }
    }
}, {
    freezeTableName: true,
    timestamps: false
}) as DeckModelStatic;