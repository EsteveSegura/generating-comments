const titlegen = require('titlegen');
const utils = require('../src/utils.js');

let generator = titlegen.create();


(async ()=>{
    let datasetLineByLine = await utils.readFileLineByLine('../dataset/foodsCleanShort.txt')
    generator.feed(datasetLineByLine)

    for(let i = 0 ; i < 1000; i++){
        console.log(generator.next())
    }
})();


