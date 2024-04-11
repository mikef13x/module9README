// packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")

// an array of questions for user input

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
            message: "what is your email?",
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
            message: "what is the usage of the application",
            name: 'usage',
        },
        {
            type: 'input',
            message: "who are the contributors",
            name: 'contributors',
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
            choices: ['MIT', 'ISC', "Perl"]
        },

    ]).then((answers) => {
        const readMe = generateReadMe(answers)

        fs.writeFile("./outputREADME/README.md", readMe, (err) => {
            err ? console.log(err) : console.log("success!")
        });
    });

// generate the read me section which has the paramaters below and the format wanted
const generateReadMe = ({ title, description, installation, usage, contributors, tests, license, github, email }) =>
    `# ${title} 

${renderLicenseBadge(license)}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributors
${contributors}
## Tests
${tests}
        

## License
${renderLicenseSection(license)}
        

## Questions
https://github.com/${github}/

${email} You can reach me here at my email.`


//render license badges here

function renderLicenseBadge(license) {
    if (license === "MIT") {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (license === "ISC") {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
    if (license === "Perl") {
        return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
    }
}
// render license descriptions here
function renderLicenseSection(license) {
    if (license === "MIT") {
        return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:`
    }
    if (license === "ISC") {
        return `Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.`
    }
    if (license === "Perl") {
        return `This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.

        You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.`
    }

}

 
