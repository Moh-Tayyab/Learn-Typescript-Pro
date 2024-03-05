//Self Check Quiz:
import inquirer from "inquirer";

let input1 = await inquirer.prompt([{
    name: "userAnswer",
    type: "string",
    message: "What is the capital of Farance?"
}])

function quiz(question: string , correctAnswer: string) { 
    if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log("Correct!");
    }
    else {
        console.log("Wrong answer. Try again.");
    }
}

quiz("What is the capital of Farance?", "Paris.");

