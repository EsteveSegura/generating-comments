const utils = require('./utils.js');

function generate(listVerbs,listSentences,emojis = false,listEmojis = [], emojisRandomChance = 3){
    let getAllSentences = []

    for(let i = 0 ; i < listSentences.length; i++){
        let sentenceToReplace = listSentences[i]
        for(let j = 0 ; j < listVerbs.length;j++){
            sentenceToReplace = sentenceToReplace.replace("$",listVerbs[j])
            
            let randomEmojis = utils.randomInt(0,10)
            if(emojis && randomEmojis < emojisRandomChance ){
                sentenceToReplace = `${sentenceToReplace} ${listEmojis[utils.randomInt(0,listEmojis.length-1)]} ${listEmojis[utils.randomInt(0,listEmojis.length-1)]} ${listEmojis[utils.randomInt(0,listEmojis.length-1)]}`
            }
            getAllSentences.push(sentenceToReplace)
            sentenceToReplace = listSentences[i]//Reset
        }
    }
    return getAllSentences
}

module.exports = { generate }