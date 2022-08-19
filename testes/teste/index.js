(async () => {
    const database = require('./db')
    const Forma = require('./formas')
    await database.sync()

    const novaForma = await Forma.create({
        desc_forma: 'Pix',
    })
    console.log(novaForma)

    // mostra o produto de acordo com a primary key
    // const formas = await Forma.findAll()
    // console.log(formas)
})()

