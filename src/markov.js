const titlegen = require('titlegen');
const utils = require('./utils.js');


async function generate(path,howManyChain){
    return new Promise(async function(resolve,reject){
        let generator = titlegen.create();
        let finalTextMarkov = []
        let dataset = [];

        if(Array.isArray(path)){
            dataset = path
        }else{
            dataset = await utils.readFileLineByLine(path)
        }
        generator.feed(dataset)

        for(let i = 0 ; i < howManyChain; i++){
            actualMarkovChain = generator.next()
            console.log(actualMarkovChain)
            finalTextMarkov.push(actualMarkovChain)
        }

        resolve(finalTextMarkov)
    })
}

module.exports = { generate }