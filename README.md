# Command-Line Interface `Word Counter` tool. 📝

This Node.js CLI tool allows users to count the number of words in a sentence.
It provides an interactive interface using the `inquirer` library and colourful output using `chalk`.

## Project Objectives: 🎯

1. **Implement a CLI tool using TypeScript**: Create a command-line interface application that accurately counts words in a given sentence.

2. **Utilize modern libraries for enhanced user experience**:
   - **Inquirer**: Use Inquirer for interactive prompts, allowing users to add or remove words seamlessly.
   - **Chalk**: Utilize Chalk to style command-line output with colors, enhancing readability.

3. **Enhance user experience with clear instructions and error handling**:
   - Provide clear instructions and prompts to guide users through the word counting and manipulation process.
   - Implement comprehensive error handling to gracefully manage user input errors and unexpected situations.

4. **Maintain code quality and scalability**:
   - Leverage TypeScript's strong typing and modular structure to ensure code readability, maintainability, and scalability.
   - Follow best practices in software development to create a well-structured and maintainable codebase.

## Project Setup: ⚙️

1. **Initialize TypeScript Configuration**: Run `tsc --init` to generate a `tsconfig.json` file. Adjust the `target` and `module` options according to your project requirements.

2. **Initialize npm Package**: Run `npm init` to create a `package.json` file. This file holds various metadata relevant to the project, such as dependencies and scripts.

3. **Install Dependencies**:
   - Run `npm install inquirer` to install the Inquirer library.
   - Run `npm install --save-dev @types/inquirer` to install TypeScript types for Inquirer, providing type definitions for better development experience.
   - Run `npm install chalk` to install the Chalk library.

### Features: ✨
- Count words in a sentence
- Interactive user prompts
- Colored output for better readability

### Usage: 💻

- To use the tool via CLI command, run the following command in your terminal:
```
npx cli-word-counter-tool
```
- Once the application is running, follow these steps to use it:

1. Enter a sentence when prompted to count the words
2. The updated sentence with the word count will be displayed.
3. Repeat steps 2-4 as needed until you're finished using the tool.

### Additional Notes: ℹ️
- The program is designed to be simple and easy to use.  

# Word Counter with Add, Remove, and Exit Functions 🔄 :-

This project is a command-line tool built with TypeScript that counts words in a sentence and provides functionalities to add or remove words dynamically.

## Project Objectives: 🎯

1. **Implement a CLI tool using TypeScript**: Create a command-line interface application that accurately counts words in a given sentence.

2. **Utilize modern libraries for enhanced user experience**:
   - **Inquirer**: Use Inquirer for interactive prompts, allowing users to add or remove words seamlessly.
   - **Chalk**: Utilize Chalk to style command-line output with colors, enhancing readability.

3. **Enable dynamic word manipulation**:
   - **Add Words**: Allow users to add new words to the input sentence, expanding the functionality beyond simple word counting.
   - **Remove Words**: Provide the capability to remove existing words from the input sentence, offering flexibility in managing text content.

4. **Ensure accurate word counting and integrity**:
   - Implement robust algorithms to accurately count words, even after modifications to the sentence.
   - Maintain the integrity of the sentence structure throughout the word manipulation process.

5. **Enhance user experience with clear instructions and error handling**:
   - Provide clear instructions and prompts to guide users through the word counting and manipulation process.
   - Implement comprehensive error handling to gracefully manage user input errors and unexpected situations.

6. **Maintain code quality and scalability**:
   - Leverage TypeScript's strong typing and modular structure to ensure code readability, maintainability, and scalability.
   - Follow best practices in software development to create a well-structured and maintainable codebase.

## Project Setup: ⚙️

1. **Initialize TypeScript Configuration**: Run `tsc --init` to generate a `tsconfig.json` file. Adjust the `target` and `module` options according to your project requirements.

2. **Initialize npm Package**: Run `npm init` to create a `package.json` file. This file holds various metadata relevant to the project, such as dependencies and scripts.

3. **Install Dependencies**:
   - Run `npm install inquirer` to install the Inquirer library.
   - Run `npm install chalk` to install the Chalk library.




## Additional Features: ➕

- **Word Frequency Analysis**: Implement a feature to analyze the frequency of each word in the sentence, providing insights into the distribution of words.
- **Case Insensitivity**: Allow users to perform word manipulation operations case-insensitively, ensuring flexibility in text processing.
- **Undo/Redo Functionality**: Incorporate undo and redo functionality to revert or reapply word manipulation actions, enhancing user control and experience.


## Quick Start: 🚀

- To quickly get started with this project in your Visual Studio Code TypeScript project, follow these steps:

1. Open Visual Studio Code and create a new TypeScript project file or navigate to your existing TypeScript project.

2. Create a new file named `word-counter.ts` (or any other appropriate name) within your project directory.

3. Copy the code below and paste it into your `word-counter.ts` file:

```
import inquirer from "inquirer";
import chalk from "chalk";


// Function to count words and display the result
async function countWords(sentence: string) {
    const words = sentence.trim().split(" ");
    console.log(words);
    console.log(chalk.blue(`Your sentence word count is ${words.length}`));
}

// Welcome message for the user
console.log(chalk.green("Welcome! Let's count the words in your sentence."));

// Prompt the user to enter a sentence
inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words:"
    }
]).then(async (answers: { Sentence: string }) => {
    await countWords(answers.Sentence);
    // Prompt for adding or removing words
    while (true) {
        const action = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "Do you want to add or remove a word?",
                choices: ["Add", "Remove", "Exit"]
            }
        ]);
        if (action.action === "Add") {
            const newWord = await inquirer.prompt([
                {
                    name: "word",
                    type: "input",
                    message: "Enter the word to add:"
                }
            ]);
            answers.Sentence += " " + newWord.word;
            await countWords(answers.Sentence);
        } else if (action.action === "Remove") {
            const wordToRemove = await inquirer.prompt([
                {
                    name: "word",
                    type: "input",
                    message: "Enter the word to remove:"
                }
            ]);
            if (answers.Sentence.includes(wordToRemove.word)) {
                answers.Sentence = answers.Sentence.replace(new RegExp(`\\b${wordToRemove.word}\\b`, "g"), "").replace(/\s{2,}/g, " ").trim();
                await countWords(answers.Sentence);
            } else {
                console.log(chalk.red("Sorry, the word you entered is not found in the sentence. Please enter a valid word to remove."));
            }
        } else {
            console.log(chalk.yellow("Thank you for using our word counter. See you soon!"));
            process.exit(0); // Exit the process
        }
    }
});
```
## Contributions: 💡

- Contributions are welcome! Feel free to submit pull requests or open issues.

- Give it a try and let us know your feedback! 🚀

#### Name:- Hasnain Ahmed 
#### Roll No:- 00310538
#### Quarter:- 1
#### Batch:- 1
#### City:- Karachi
#### Centre:- Sindh Governor House Karachi
#### Campus:- Main
#### Days/Time:- Wednesday 09:00 am - 12:00 pm






