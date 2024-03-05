//Assignment Operator:

let w = 12;
w += 3;

console.log(w);

//Comparsion Operator:

let numb1 = 5;

let numb2 = 10;

let isEqual = (numb1 === numb2);

let isNotEqual = (numb1 != numb2);

let greatThan = (numb2 > numb1);

let lessThan = (numb1 < numb2);

let greaterThanOrEqual = (numb1 >= numb2);

let lessThanOrEqual = (numb1 <= numb2);

console.log(isEqual);

console.log(isNotEqual);

console.log(greatThan);

console.log(lessThan);

console.log(greaterThanOrEqual);

console.log(lessThanOrEqual);

//Logical Opetrator:

let tea = 4;

let coffee = 5;

let  lgAnd = (tea < coffee) && (coffee > tea); // true
let  lgNand = (tea < coffee) && (coffee > tea); // false

let  lgOr = (tea < coffee) || (coffee > tea); // true
let  lgNor = (tea < coffee) || (coffee > tea); // false

let  lgNot =!(tea < coffee); // false

console.log(lgAnd);
