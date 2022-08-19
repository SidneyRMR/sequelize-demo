// import './crud/crud'
// import crud from './crud/crud'
const crud = require('./crud')
console.log(crud)

// (async () => {
    // const database = require('./db')
    // const Pastel = require('./pasteis')
    // const CreatePastel = require('./crud/create')
    // await database.sync()

    //função que chama cadastra novos Pastels
    crud.createPastel


    // mostra todos produtos item a item
    // const produtos = await Produto.findAll()
    // produtos.forEach(produto => {
    //     nome = produto.nome,
    //     preco = produto.preco,
    //     descricao = produto.descricao
    //     console.log(`   nome: ${nome}, 
    // preco: ${preco}, 
    // descricao: ${descricao}
    // `)
    // });
    // console.log(produtos)

    // mostra o produto de acordo com a primary key
    // const pasteis = await Pastel.findAll()
    // console.log(pasteis)


// })()