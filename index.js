// TODO: Include packages needed for this application
const fs = require("fs");
const iq = require("inquirer");
const generate = require("./utils/generateMarkdown");
const licenses = require("./utils/licenses.json");

const requireLetterAndNumber = value => /\w/.test(value) && /\d/.test(value);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'How do you install you project?',
        name: 'Installation',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'Usage',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'How can you contribute to this project?',
        name: 'Contributing',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'How can you run test to verify the integrity of the project?',
        name: 'Tests',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'What should users do if they have questions?',
        name: 'Questions',
        validate: requireLetterAndNumber,
    },
    {
        type: 'list',
        message: 'What lisence will your project use?',
        name: 'license',
        choices: Object.keys(licenses)
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Username',
        validate: requireLetterAndNumber,
    },
    {
        type: 'input',
        message: 'What is your email address people should contact me on?',
        name: 'Email',
    },
    {
        type: 'input',
        message: 'What is the github link associated with your project?',
        name: 'link',
    },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    iq.prompt(questions).then(data=>{
        writeToFile(data.title)
    })
}

// Function call to initialize app
init();
