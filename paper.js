#! /usr/bin/env/ node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\t\t\t\tASSALAMUALIKUM WELCOME TO PAPER*SCISSOR*ROCK GAME\t\t\t\t\t"));
let input = await inquirer.prompt([
    {
        name: "player1",
        type: "list",
        message: "PLAYER1,SELECT YOUR CHOICE ",
        choices: ["rock", "paper", "scissor"],
    },
    {
        name: "player2",
        type: "list",
        message: "NOW PLAYER2,SELECT YOUR CHOICE",
        choices: ["rock", "paper", "scissor"],
    },
]);
if (input.player1 === input.player2) {
    console.log(chalk.bold.redBright("MATCH TIED"));
}
else if (input.player1 == "rock" && input.player2 == "paper",
    input.player1 == "paper" && input.player2 == "scissor",
    input.player1 == "scissor" && input.player2 == "rock") {
    console.log(chalk.italic.yellowBright("<*****CONGRATULATIONS PLAYER 2 WINS*******\t>"));
}
else {
    console.log(chalk.italic.greenBright("\t<*****CONGRATULATIONS PLAYER 1 WINS*******>\t"));
}
