const markov = require('../src/markov.js')
const utils = require('../src/utils.js');

async function markovChain(){
    let amazonDataSetFile = await utils.readFileLineByLine('../dataset/foodsCleanShort.txt')
    let ourDataSet = await utils.readFileLineByLine('../dataset/sentences.txt')
    let filteredData = amazonDataSetFile.filter((comments) => {
        if(comments.includes("taste") || comments.includes("yummy") || comments.includes("good") || comments.includes("cooking") || comments.includes("delicious") || comments.includes("savory") || comments.includes("devour")){
            return comments
        }
    })
    filteredData = filteredData.slice(0,3500)
    let bothDataSetsTogether = [...amazonDataSetFile,...ourDataSet]
    let markovChain = await markov.generate(bothDataSetsTogether, 200)
    await utils.saveArrayToTxtLineByLine(markovChain, './sentencesWithMarkov.txt');
}

markovChain()
