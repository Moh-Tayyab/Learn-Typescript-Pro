"use strict";
//Variable Scope:
Object.defineProperty(exports, "__esModule", { value: true });
//Global Variable and Local Variable;
let globVar = "I'm global variable.";
function example() {
    let localVar = "I'm local variable.";
    console.log(localVar);
}
example();
//console.log(localVar); //error local variable is not defined.
