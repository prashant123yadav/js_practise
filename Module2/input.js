const readline = require('readline');

const pl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let Questions = 'what is your age ?\n'

pl.question(Questions,(answer)=>{
console.log(`i am ${answer} year old !`);

pl.close()
}); 