import inquirer from "inquirer";
import chalk from "chalk";
// Welcome message for the user
console.log(chalk.green("Welcome! Let's count the words in your sentence."));
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your Sentence to count the words",
    }
]);
const word = answers.Sentence.trim().split(" ");
console.log(word);
console.log(`Your Sentence word count is ${word.length}`);
console.log(chalk.yellow("Thank you for using our word counter. See you soon!"));
