const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ name, email, github, description, license, install, tests, repo, contributing }) =>
`# ${name}
[Github license]

## Description
${description}

## Table of Contents
<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#tests">Tests</a></li>
  <li><a href="#questions">Questions</a></li>
</ul>

## Installation
${install}

## Usage
${repo}

## License
${license}

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions about the repo, open any issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${github}/).`

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your Github Username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your projects name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'GPL-2-0', 'Apache-2-0', 'Unlicensed']
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'repo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributing',
    },
  ])
  .then((answers) => {
    const readMeContent = generateReadMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
