import inquirer from "inquirer";
let input2 = await inquirer.prompt([{
        name: "answer",
        type: "string",
        message: "what is the capital of Pakistan?"
    }]);
function respone(answer, correct_answer) {
    if (input2.answer.toLocaleUpperCase() === correct_answer.toLocaleUpperCase()) {
        console.log("Correct!");
    }
    else {
        console.log("Something went to wrong.Please try agin. ");
    }
}
//respone("What is the capital of Pakistan?" , "Isalamabad")
respone(input2.answer, "Islamabad");
