const utils = require('../src/utils.js');
const markov = require('../src/markov.js');
const generateCommentsFromHandMadeData = require('../src/generateCommentsFromHandMadeData.js')

let arrFinal = []
let markovChain = []

let listSetencesInit =[
    "Eso tiene una pinta de ser $",
    "Eso tiene una pinta de ser muy $",
    "Eso tiene una pinta de algo demasiado $",
    "En la foto da la sensación de $",
    "Solo puedo decir una palabra $",
    "Parece muy $",
    "Parece $",
    "Parece que es algo muy $",
    "Seguro que es $",
    "Demasiado $",
    "El sabor debe de ser $"
];

let listAdjectives = [
    "bueno",
    "genial",
    "sabroso",
    "perfecto",
    "apetitoso",
    "buenisimo",
    "maravilloso",
    "perfecto",
    "gustoso",
    "rico",
    "suculento",
    "sustancioso",
    "delicado",
    "sazonado",
    "jugoso"
];

let listVerbs = [
    "comer",
    "degustar",
    "saborear",
    "alimentarme",
    "cenar",
    "injerir",
    "tragar",
    "deglutir",
    "engullir",
    "almorzar",
    "atracarme"
]

let listVerbsConjugado = [
    "comerlo",
    "degustarlo",
    "saborearlo",
    "alimentarme",
    "cenarlo",
    "injerirlo",
    "tragarlo",
    "deglutirlo",
    "engullirlo",
    "almorzarlo",
    "atracarme"
]

let listSentences = [
    "Me gustaria $",
    "Tengo ganas de $",
    "Debo de $, lo necesito"
]

let emojis = [
    "😋",
    "🍽️",
    "🍴"
]

let sentencesAboutPhotography = {
    "mainSentence":[
        "La fotografia transmite ''$''",
        "La foto hace que parezca $",
        "En esa foto se transmite: ''$''",
        "Parece $, en esa foto"
    ],
    "wordsFill":[
        "apetitoso",
        "gustoso",
    ]
}

//50000 runs give = 17178
//70000 runs give = 
for(let i = 0; i < 2000; i++){
    let sentencesOne = generateCommentsFromHandMadeDate.generate(listAdjectives, listSetencesInit)
    let sentencesTwo = generateCommentsFromHandMadeDate.generate(listVerbs,listSentences, true, emojis)
    let sentencesTwoClean = generateCommentsFromHandMadeDate.generate(listVerbsConjugado,listSentences)
    let photographySentences = generateCommentsFromHandMadeDate.generate(sentencesAboutPhotography.wordsFill,sentencesAboutPhotography.mainSentence)

    
    let typeOne = sentencesOne[utils.randomInt(0,sentencesOne.length-1)] + ", " + sentencesTwo[utils.randomInt(0,sentencesTwo.length-1)]
    arrFinal.push(typeOne)
    console.log(typeOne)

    let typeTwo = sentencesOne[utils.randomInt(0,sentencesOne.length-1)] 
    arrFinal.push(typeTwo)
    console.log(typeTwo)

    let TypeThree = sentencesTwoClean[utils.randomInt(0,sentencesTwoClean.length-1)]
    arrFinal.push(TypeThree)
    console.log(TypeThree)
    
    let TypeFour = `${TypeThree}, ${photographySentences[utils.randomInt(0,photographySentences.length-1)]}`
    arrFinal.push(TypeFour)
    console.log(TypeFour)
}

