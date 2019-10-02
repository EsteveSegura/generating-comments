const readline = require('readline');
const fs = require('fs');

// create instance of readline
// each instance is associated with single input stream
let rl = readline.createInterface({
    input: fs.createReadStream('./dataset/foods.txt')
});


let myFile = "";
// event is emitted after each line
rl.on('line', function(line) {
    if(line.startsWith("review/text: ")){
        let cleanWord = line.split('review/text: ')
        
        console.log(cleanWord[1]);
        myFile = myFile +cleanWord[1] +"\n"
    }
});

rl.on('close', function(line) {
    fs.writeFile("./foodsCleanLong.txt", myFile, function(err) {

        if(err) {
            return console.log(err);
        }
    
        console.log("The file was saved!");
    }); 
});