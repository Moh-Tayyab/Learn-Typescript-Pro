//Arrow Function
let fryEgg1 = () => 1 + 1.5 + 2;
// egg + butter + sal
let resultEgg = fryEgg1();
console.log(resultEgg);
//2nd condition:
let fryEgg2 = (egg, butter, salt) => egg + butter + salt;
let resultEgg2 = fryEgg2(1, 1.5, 2);
console.log(resultEgg2);
//3rd condition:
let fryEgg3 = () => { return 1 + 1.5 + 2; };
let resultEgg3 = fryEgg3();
console.log(resultEgg3);
//4th condition:
let fryEgg4 = () => {
    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
};
let resultEgg4 = fryEgg4();
console.log(resultEgg4);
//5th condition:
let fryEgg5 = (egg, butter, salt) => {
    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
};
let resultEgg5 = fryEgg5(1, 1.5, 2);
console.log(resultEgg5);
export {};
