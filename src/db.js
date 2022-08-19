//instalar bibliotecas necessarias npm i sequelize mysql2

const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste_node', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro)
})

module.exports = sequelize