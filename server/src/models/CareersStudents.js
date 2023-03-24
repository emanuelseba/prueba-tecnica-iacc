import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

import { Carrers } from '../models/Careers.js';
import { Students } from '../models/Students.js';

export const CareersStudents = sequelize.define('careers_students',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

Carrers.belongsToMany(Students, { through: CareersStudents });
Students.belongsToMany(Carrers, { through: CareersStudents });