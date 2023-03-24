import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';


export const Students = sequelize.define('students',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    rut:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});