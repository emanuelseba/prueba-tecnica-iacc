import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


export const Carrers = sequelize.define('careers',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING
    }
});