// TODO: Include packages needed for this application
const fs = require("fs");
const iq = require("inquirer");
const generate = require("./utils/generateMarkdown");
const licenses = require("./utils/licenses.json");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project called?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'How do you install you project?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'How can you contribute to this project?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'How can you run tests to verify the integrity of the project?',
        name: 'Tests',
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
        writeToFile(`${data.title}-README.md`,generate(data))
    })
}

// Function call to initialize app
init();
