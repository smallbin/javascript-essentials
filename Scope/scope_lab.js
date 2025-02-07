//global scope
var globalVar = "I am a global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    //block scope
    var blockVar = "I am a block scoped var";
    let blockLet = "I am a block scoped let";
    const blockConst = "I am a block scoped const";
}

console.log(globalVar); 
console.log(globalLet); 
console.log(globalConst);

//console.log(blockVar); 
//console.log(blockLet);
//console.log(blockConst);