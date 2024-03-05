//Resursive Function:

function countNumb(number: number): void {
    if (number <= 0) {
        console.log("Done!")
        return;
    }
    console.log(number);
    countNumb(number - 1);
    
    
}

countNumb(5);

/* 
Create a Recursive Function 
Create a function that calls itself to solve a problem
*/

function factorial(n: number): void {
    if (n <= 1) {
        console.log(n);
        return;
    }
    console.log(n);
    factorial(n - 1);
}

factorial(10);

//more example:

function factorial1(numb: number): number {
    if (numb === 0) {
        return 1;
    }
    return numb * factorial1(numb - 1);

}

//console.log(factorial1(5));

let respon = factorial1(5);

console.log(respon);