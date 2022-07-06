import {Sequelize} from "sequelize";

const db = new Sequelize('siswa_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;