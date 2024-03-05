//Addition Calculator:
import inquirer from "inquirer";
let userInput1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "Please enter your first no:"
});
let userInput2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "Please enter your second no:"
});
let sum = userInput1.num1 + userInput2.num2;
console.log(sum);
