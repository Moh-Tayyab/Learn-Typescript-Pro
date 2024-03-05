//Messi , Ronaldo , Neymar Game:
let captan1 = "Ronaldo";
let captan2 = "Messi";
if (captan1 == captan2) {
    console.log("It is a tie!");
}
else if ((captan1 === "Ronaldo" && captan2 === "Messi") ||
    (captan1 === "Messi" && captan2 === "Ronaldo") ||
    (captan1 === "Ronaldo" && captan2 === "Neymar") ||
    (captan1 === "Neymar" && captan2 === "Ronaldo") ||
    (captan1 === "Neymar" && captan2 === "Messi")) {
    console.log("Captan1 won the match.");
}
else {
    console.log("Captan2 won the match.");
}
export {};
