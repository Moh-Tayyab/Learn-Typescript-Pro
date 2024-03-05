//Arrow Function

let fryEgg1 = () => 1 + 1.5 + 2;
                // egg + butter + sal
let resultEgg: number = fryEgg1();

console.log(resultEgg);

//2nd condition:

let fryEgg2 = (egg: number, butter: number, salt: number): number => 
    egg + butter + salt;
                
let resultEgg2: number = fryEgg2(1, 1.5, 2);

console.log(resultEgg2);

//3rd condition:

let fryEgg3 = () => {return 1 + 1.5 + 2};

let resultEgg3: number = fryEgg3();

console.log(resultEgg3);

//4th condition:
let fryEgg4 = () => {

    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
}

let resultEgg4: number = fryEgg4();

console.log(resultEgg4);

//5th condition:

let fryEgg5 = (egg: number, butter: number, salt: number): number => {

    let halfFryEgg = 1 + 1.5 + 2;
    return halfFryEgg;
}

let resultEgg5: number = fryEgg5(1, 1.5, 2);

console.log(resultEgg5);