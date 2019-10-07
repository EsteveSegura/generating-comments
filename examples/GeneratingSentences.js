const utils = require('../src/utils.js');
//const markov = require('../src/markov.js');
const generateCommentsFromHandMadeData = require('../src/generateCommentsFromHandMadeData.js')

const howManyIterations = 99999;
let allSentences = [];

let sentencesAboutPicture ={
    "mainSentence": [
        "I love photography, it transmits $",
        "The photo talks about $",
        "Just '$'",
        "Beyond photography you can perceive: $",
        "$!",
        "I only perceive one thing: $",
    ],
    "wordsFill": [
        "flavor",
        "good cooking",
        "made with love",
        "good cooker"
    ]
}

let sentencesAboutEatIt = {
    "mainSentence":[
        "I want to $",
        "I would like to",
        "The photo tells me that i must $",
        "That picture makes you want to $",
        "Can i $"
    ],
    "wordsFill":[
        "devour it",
        "attack it",
        "eat it",
        "savor it",
        "bite it"
    ]
}

let sentencesAboutFood = {
    "mainSentence":[
        "This picture looks $",
        "Looks $, i love your pictures",
        "I want to try that food, it looks $",
        "That food looks like $",
        "I can only say that $ looks, I cant help wanting to eat it",
        "$!!",
        "It seems to be very $",
        "Have you cooked it? $",
        "Just $!",
        "Too $",
        "It seems $"
    ],
    "wordsFill":[
        "good",
        "yummy",
        "fine",
        "great",
        "appetizing",
        "delectable",
        "good",
        "tasty",
        "rich",
        "delicious",
        "savory"
    ]
}


async function generateSentences(){
    let sentencesGeneratorPicture = await generateCommentsFromHandMadeData.generate(sentencesAboutPicture.wordsFill, sentencesAboutPicture.mainSentence)
    let sentencesGeneratorEatIt = await generateCommentsFromHandMadeData.generate(sentencesAboutEatIt.wordsFill, sentencesAboutEatIt.mainSentence)
    let sentencesGeneratorFood = await generateCommentsFromHandMadeData.generate(sentencesAboutFood.wordsFill, sentencesAboutFood.mainSentence)
    let allCompoundSentences = []
    for(let i = 0 ; i < howManyIterations; i++){
        let compoundSentencePictureAndEatIt = `${sentencesGeneratorPicture[utils.randomInt(0,sentencesGeneratorPicture.length-1)]}. ${sentencesGeneratorEatIt[utils.randomInt(0,sentencesGeneratorEatIt.length-1)]}`
        let compoundSentenceFoodAndEatIt = `${sentencesGeneratorFood[utils.randomInt(0,sentencesGeneratorFood.length-1)]}. ${sentencesGeneratorEatIt[utils.randomInt(0,sentencesGeneratorEatIt.length-1)]}`
        let compoundSentenceFoodAndPicture = `${sentencesGeneratorFood[utils.randomInt(0,sentencesGeneratorFood.length-1)]}. ${sentencesGeneratorPicture[utils.randomInt(0,sentencesGeneratorPicture.length-1)]}`
        allCompoundSentences.push(compoundSentencePictureAndEatIt)
        allCompoundSentences.push(compoundSentenceFoodAndEatIt)
        allCompoundSentences.push(compoundSentenceFoodAndPicture)
    }

    //flat all arrays 
    let allSentences = [...allCompoundSentences,...sentencesGeneratorPicture,...sentencesGeneratorEatIt,...sentencesGeneratorFood]
    
    await utils.saveArrayToTxtLineByLine(allSentences, './sentences.txt');
    console.log(allSentences)
}

generateSentences();
