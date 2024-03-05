//Funcations:
//Basic Function:
function fryEgg() {
    let cocked = 1 + 2.3 + 3;
    console.log(cocked);
}
fryEgg();
/*
function add() {
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    console.log(sum);
}

add();
*/
//Returning function:
function halfFryEgg2() {
    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
}
let fryResult = halfFryEgg2();
console.log(fryResult);
//Parameter and Arguments :
function makePizza(size, quanity) {
    return size;
    return quanity;
}
let fulfilOrder = makePizza(12, 2);
console.log(fulfilOrder);
// Parameter and Argument multipl two numbers:
function multi(a, b) {
    return a * b;
}
let response = multi(2, 3);
console.log(response);
//Default Parameter:
function defaultFunc(pizza = 2, size = 12.3, quanity = 3) {
    return pizza * size * quanity;
}
let response1 = defaultFunc();
console.log(response1);
function dFunc(pizza = 2, size = 12.3, quanity = 3) {
    return pizza + size + quanity;
}
let response2 = dFunc(2, 12.3, 3);
console.log(response2);
//Rest Parameter:
function restParaFunc(egg = 1, ...ingredients) {
    console.log(egg);
    console.log(ingredients);
}
restParaFunc(2, 3, 4, 5, 6, 9, 10);
//Spread Operator
function spreadOperFunc(pizza = 3, ...ingredients) {
    console.log(pizza);
    console.log(ingredients);
}
spreadOperFunc(2, 5, 6);
export {};
