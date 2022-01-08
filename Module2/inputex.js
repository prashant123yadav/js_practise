
const work = require("softwereEngineer");

const sf = softwereEngineer.createinterface({

input:stdin ,
output:stdout
});
 
var argu = "what is your designation ?\n";

sf.question(argu,(answer)=>{
    console.log(`my designation is ${answer}!`);

    sf.close();

});