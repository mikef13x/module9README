// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")



// TODO: Create an array of questions for user input
// const questions =
inquirer
    .prompt([
        {
            type: 'input',
            message: "what is the title of your project?",
            name: 'title',
        },
        {
            type: 'list',
            message: "what is your description",
            name: 'description',
            choices: ['hello', 'hi', "three"]
        },
        {
            type: 'input',
            message: "what is your email",
            name: 'email',
        },
        {
            type: 'input',
            message: "what is your GitHub username",
            name: 'github',
        },
        {
            type: 'checkbox',
            message: "what is your place",
            name: 'license',
            choices: ['hello', 'hi', "three"]
        },

    ]).then((answers) => {
        const file = 'log.txt';
        fs.writeFile(file, JSON.stringify(answers, null, '\t'), (err) => {
            err ? console.log(err) : console.log("success!")
        });
        const readMe = generateReadMe(answers)

        fs.writeFile("README.md", readMe, (err) => {
            err ? console.log(err) : console.log("success!")
        });
    });

const generateReadMe = ({ title, description, contents, installation, usage, contributing, tests, license, github, email }) =>
`# Title 
${title}

## table of contents
${contents}

## Description
${description}
${installation}
${usage}
${contributing}
${tests}
        

## License
${license}
        

## Questions
https://github.com/${github}/
${email}
You can reach me here at my email.`








// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();