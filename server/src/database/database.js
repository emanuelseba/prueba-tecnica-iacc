import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'iacc', // Nombre base de datos
    'postgres', //usuario
    '1234', //contraseña
    {
        host:"localhost",
        dialect:"postgres", //tipo base de datos
        port: "5432"
    }
);