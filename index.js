(async () => {
    const database = require('./db')
    const Produto = require('./produto')
    await database.sync()

    //Criar produtos dentro do banco de dados 'pastelaria'
    // const novoProduto = Produto.create({
    //     nome: 'Mouse USB',
    //     preco: 30,
    //     descricao: 'Mouse legal'
    // })
    // console.log(novoProduto)

    //Consular todos os dados da tabela produtos
    const produtos = await Produto.findAll()
    console.log(produtos)

    //Consular dados da tabela produtos com valor de PK 1
    // const produtos = await Produto.findByPk(1)
    // console.log(produtos)

    //Consular dados da tabela produtos com valor de PK 1
    //  produtos = await Produto.findAll({
    //     where: {
    //         preco: 15
    //     }
    //  })
    // console.log(produtos)

    //Update da descrição do produto 
    // produtos.descricao = 'Fiz uma alteração';
    // await Produto.save()
    
    // await Produto.destroy()

    await Produto.destroy({ where: {
        preco: 30
    }})
})()