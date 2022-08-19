(async () => {
    const database = require('./db')
    const Produto = require('./produto')
    await database.sync()

    //cadastra novos produtos
    // const novoProduto = await Produto.create({
    //     nome: 'Monitor LED',
    //     preco: 499.99,
    //     descricao: 'Monitor bacana'
    // })
    // console.log(novoProduto)


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
    const produtos = await Produto.findAll()
    console.log(produtos)


})()