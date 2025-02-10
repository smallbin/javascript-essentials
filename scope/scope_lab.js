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

{
    let newLet = "new let variable";
    const newConst = "new constant variable";
    var newVar = "new var variable";
    //reassign inside block
    newLet = "reassigned new let variable";
    //newConst = "reassigned new const variable";
    newVar = "reassigned new var variable";
    console.log("Reassignments inside");
    console.log(newLet); 
    console.log(newConst); 
    console.log(newVar);
}
//reassign outside block
newLet = "reassigned outside new let variable";
newConst = "reassigned outside new const variable";
newVar = "reassigned outside new var variable";

console.log("Reassignments Outside")
console.log(newLet); 
console.log(newConst); 
console.log(newVar);

/**
 * I am a global variable
scope_lab.js:14 I am also global, but scoped with let
scope_lab.js:15 I'm a global constant
scope_lab.js:29 Reassignments inside
scope_lab.js:30 reassigned new let variable
scope_lab.js:31 new constant variable
scope_lab.js:32 reassigned new var variable
scope_lab.js:39 Reassignments Outside
scope_lab.js:40 reassigned outside new let variable
scope_lab.js:41 reassigned outside new const variable
scope_lab.js:42 reassigned outside new var variable
 */