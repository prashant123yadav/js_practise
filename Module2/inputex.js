
const work = require("readline");

const sf = work.createInterface({

input:process.stdin ,
output:process.stdout
});
 
var argu = "what is your designation ?\n";

sf.question(argu,(answer)=>{
    console.log(`my designation is ${answer}!`);

    sf.close();

});