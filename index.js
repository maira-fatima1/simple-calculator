#! /usr/bin/env node 
import inquirer from "inquirer";
//printing a welcome message
console.log("\n\tWelcome To \'My-Simple-Calculator'\n");
// Asking Question  from Users through inquirer
const answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstnumber"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "secondnumber"
    },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement If-Else
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
console.log("\n\tThanks for using \'My-Simple-Calculator'\n");
