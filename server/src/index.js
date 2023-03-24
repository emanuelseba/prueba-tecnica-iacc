import app from './app.js';
import dotenv from "dotenv";
import { sequelize } from './database/database.js';

import {careers} from './data/careers.js';

import {Carrers} from "./models/Careers.js";
import "./models/Students.js";
import "./models/CareersStudents.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function main(){
    try {
        await sequelize.sync({ force: true }).then(() => {
            Carrers.create(careers[0]);
            Carrers.create(careers[1]);
            Carrers.create(careers[2]);
          });
        console.log("Connection has been established successfully");
        app.listen(PORT);
        console.log('Server is listening on port', PORT);
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

main();