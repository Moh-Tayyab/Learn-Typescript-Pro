//input Game:

import inquirer from "inquirer";

 let myFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "What is your friend's name?"

}])
if(myFriend.name === "Rana Zain" || myFriend.name === "Ameen"){
    console.log(`${myFriend.name} is my best friend.`);
}else{
    console.log(`${myFriend.name} is not my friend.`);
}
