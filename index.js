// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./utils/generateMarkdown");

// (Prompt) User questions to populate the README.md
const promptUser = () =>
    inquirer.prompt([{
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username?',
        },
        {
            type: 'input',
            pname: 'project ',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe the installation process',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license?.',
            choices: [
                "apache 2.0", "mit", "bsd-3", "none"
            ]
        },
    ]);