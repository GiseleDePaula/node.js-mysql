const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
     id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
     },
     name: {
        type: Sequelize.STRING,
        allowNull: false,
     },
     email: {
        type: Sequelize.STRING,
        allowNull: false,
     }
});

//Criar uma tabela
//User.sync();
//Verifica se há alguma diferença na tabela, realiza a lateração
//User.sync({ alter: true})

module.exports = User;