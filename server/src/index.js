import app from './app.js';
import dotenv from "dotenv";
import { sequelize } from './database/database.js';

import "./models/Careers.js";
import "./models/Students.js";
import "./models/CareersStudents.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function main(){
    try {
        await sequelize.sync();
        console.log("Connection has been established successfully");
        app.listen(PORT);
        console.log('Server is listening on port', PORT);
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

main();