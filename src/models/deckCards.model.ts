import {Model, DataTypes, BuildOptions} from 'sequelize';
import db from '../database/mysql.db.js';
import IDeckCards from '../interfaces/IDeckCards.js';

interface DeckCardsInstance extends Model<IDeckCards>, IDeckCards {}
type DeckCardsModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): DeckCardsInstance;
};

export default db.define('deck', {
    id_deck_cards: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.NUMBER
    },
    id_deck:{
      type:DataTypes.NUMBER,
      references:{
        model:'Usuario',
        key:'id_deck'
      }
    },
    tipo: DataTypes.NUMBER,
    id_carta: DataTypes.STRING
}, {
    freezeTableName: true,
    timestamps: false
}) as DeckCardsModelStatic;