//Anonymous Function:

import { log } from "console";

let eggFry = function () {
    let halfFryEgg = 1 + 1.5 + 2;
    
    console.log(halfFryEgg);
    
    //return halfFryEgg;
}

 eggFry();
/*
let fryResult: number = eggFry() ;

console.log(fryResult);
*/


// more example:

//Anonymous Function:

let carNum = function () {

    let carModel = 2024;
    
    //console.log(carModel);
    
    return carModel;

}

 //carNum();

let responce: number = carNum();

console.log(responce);

//Immediately Invoked Function Expression (IIFE) :

(function () {
    console.log("Run Immediately")
})();

//more example:

(function (greet: string) {
    console.log(greet);
})("I'm so happy to start learn programing.")




