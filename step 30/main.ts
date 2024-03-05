//CallBack Function:

function processUserInput(callBack: any) {
    let name = "Sir Zia Khan";
    callBack(name);
}

processUserInput(function (name: string) {
    console.log(`Hello, ${name}.`);
});

function user_input(call_back: (name: string , age: number , present: boolean) => void) {
    let name = "Muhammad";
    let age = 20;
    let present = true;
    call_back(name, age, present);
}

user_input(function(name: string , age: number , present: boolean) {
    console.log(`Hello, ${name} your age is ${age}.Are you present in class ${present}.`);
});

//Practice:

//Example no 1:

function example(call: any) {
    let name = "Muhammad";
    let age = 19;
    call(name, age);
}
example(function (name: string , age: number) {
    console.log(`Hello, ${name}, your age is ${age}.`);
});

//Example no 2:
function student(data: (name: string , fName: string , age: number , eligible: boolean) => void) {
    let name = "Muhammad Tayyab";
    let fName = "Khalid Pervaiz";
    let age = 20;
    let eligible = true;
    data(name , fName , age , eligible)
} 

student(function(name: string , fName: string , age: number , eligible) {
    console.log(`${name} S/O ${fName}, your age is ${age}.Are you eligible for this program ${eligible}.`);
});