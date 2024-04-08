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
            type: 'editor',
            message: "what is your description",
            name: 'description',
        },
        {
            type: 'input',
            message: "what is your email",
            name: 'email',
        },
        {
            type: 'input',
            message: "how do you test your application",
            name: 'tests',
        },
        {
            type: 'input',
            message: "how do you install the application",
            name: 'installation',
        },
        {
            type: 'input',
            message: "what is your GitHub username",
            name: 'github',
        },
        {
            type: 'list',
            message: "what is your license",
            name: 'license',
            choices: ['MIT', 'none', "other"]
        },

    ]).then((answers) => {
        const readMe = generateReadMe(answers)
 
        fs.writeFile("README.md", readMe, (err) => {
            err ? console.log(err) : console.log("success!")
        });
    });

const generateReadMe = ({ title, description, installation, usage, contributing, tests, license, github, email }) =>
`# ${title} 

${renderLicenseBadge(license)}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributors
${contributing}
## Tests
${tests}
        

## License
${renderLicenseSection(license)}
        

## Questions
https://github.com/${github}/
${email}
You can reach me here at my email.`




function renderLicenseBadge(license) {
    if(license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (license === "kdjlasd") {

    }
}

function renderLicenseSection(license) {
    if(license === "MIT") {
        return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:` 
    }
}



// TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();