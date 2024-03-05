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
function halfFryEgg2(): number {
    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
}

let fryResult: number = halfFryEgg2();

console.log(fryResult);


//Parameter and Arguments :
function makePizza(size: number, quanity: number): number {
    return size;
    
    return quanity;
}

let fulfilOrder = makePizza(12, 2);

console.log(fulfilOrder);

// Parameter and Argument multipl two numbers:
function multi(a: number, b: number): number {
    return a * b;
}

let response: number = multi(2, 3);

console.log(response);

//Default Parameter:
function defaultFunc(pizza: number = 2, size: number = 12.3, quanity: number = 3 ): number {
    return pizza * size * quanity;
}

let response1: number = defaultFunc();

console.log(response1);

function dFunc(pizza: number = 2, size: number = 12.3, quanity: number = 3 ): number {
    return pizza + size + quanity;
}

let response2: number = dFunc(2, 12.3, 3);

console.log(response2);

//Rest Parameter:
function restParaFunc(egg: number = 1, ...ingredients: number []) {
    console.log(egg);
    console.log(ingredients);
}

restParaFunc(2, 3, 4, 5, 6, 9, 10);

//Spread Operator

function spreadOperFunc(pizza: number = 3, ...ingredients: number []) {
    console.log(pizza);
    console.log(ingredients);
}

spreadOperFunc(2,5,6)


