
module.exports = {
    dialect:'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'vinimendes',
    database:'apinode',
    define: {
        timestamps: true,
        unserscored: true
    }
} 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'postgres',
} );

module.exports = sequelize;