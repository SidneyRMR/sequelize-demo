const Sequelize = require('sequelize')
const database = require('./db')

// const Produto = database.define('produto', {
//     id_produto: {
//         type: Sequelize.INTEGER(3),
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     desc_produto: {
//         type: Sequelize.STRING(150),
//         allowNull: false
//     },
//     produto_ativo:{
//         type: Sequelize.CHAR(1),
//         allowNull: false
//     }    
// })

// Original
const Pastel = database.define('tb_pastel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    preco: Sequelize.FLOAT(2),
    descricao: Sequelize.STRING(300)
})

module.exports = Pastel