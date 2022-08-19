
const fs = require('fs')
 //Read produtos.json
 fs.readFile("teste/api/produtos.json", function(err, data){
    //Check for errors
    if(err)throw err
    //Converting to JSON
    const produtos = JSON.parse(data)
    produtos.forEach(produto => {
        console.log(produto.desc)
    });
    
 })

