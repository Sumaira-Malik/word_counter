#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const userAns = await inquirer.prompt([
    {
        name: 'sentence',
        type: 'input',
        message: chalk.cyan("Enter Your Sentence To Count The Word")
    }
]);
const words = userAns.sentence.trim().split(" ");
console.log(chalk.magenta(words));
console.log(chalk.blue(`Your sentance word count is ${words.length}`));
