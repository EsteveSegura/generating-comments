const fs = require('fs');
const readline = require('readline');

function randomInt(min,max){
    return Math.round(Math.random() * (max-min)+ min)
}

function saveArrayToTxtLineByLine(arrFinal,pathOutput){
    return new Promise(function(resolve,reject){
        let fileToSave = deleteRepeatedValuesOnArray(arrFinal)

        fs.writeFile(pathOutput, fileToSave.join("\n"), function(err){
            if(err){
                reject(err)
            }
            
            resolve(`File saved with ${fileToSave.length} items`)
        })
    })
}

function saveToJson(arrFinal,pathOutput){
    return new Promise(function(resolve,reject){
        fileToSave = deleteRepeatedValuesOnArray(arrFinal)

        fs.writeFile(pathOutput, JSON.stringify(fileToSave),function(err){
            if(err){
                reject(err)
            }
            resolve(`File saved with ${fileToSave.length} items`)
        })
    })
}

function deleteRepeatedValuesOnArray(array){
    finalSentences = array.filter(function(item, pos) {
        return array.indexOf(item) == pos;
    })
    return finalSentences
}

function readFileLineByLine(dataPath){
    return new Promise(function(resolve,reject){
        let dataset = []

        let rl = readline.createInterface({
            input: fs.createReadStream(dataPath)
        });
        
        rl.on('line', function(line) {
            dataset.push(line)
        });
        
        rl.on('close', function(line) {
            resolve(dataset)
        });
    })
}

module.exports = { saveToJson, saveArrayToTxtLineByLine, randomInt, readFileLineByLine }