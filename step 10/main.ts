import inquirer from "inquirer";

let userInput = await inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your name?"
}]);


console.log(`${userInput.name} is present in class room.`);

