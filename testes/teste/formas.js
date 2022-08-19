const Sequelize = require('sequelize')
const database = require('./db')

const Forma = database.define('tb_formas', {
    id_forma: {
        type: Sequelize.TINYINT(2),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    desc_forma: {
        type: Sequelize.STRING(13),
        allowNull: false
    }
})

module.exports = Forma