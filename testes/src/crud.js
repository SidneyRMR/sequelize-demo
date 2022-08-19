
//cadastra novos Pastels
module.exports = async function()  {
    const database = require('./db')
    const Pastel = require('./pasteis')
    await database.sync()
    const novoPastel = await Pastel.create({
        nome: 'teste1',
        preco: 8,
        descricao: 'Massa de 20 x 30cm, recheado com 3 colheres de sei la'
    })
    console.log(novoPastel)
}

// createPastel()
