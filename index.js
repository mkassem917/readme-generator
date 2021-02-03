// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

// (Prompt) User questions to populate the README.md
const promptUser = () =>
  inquirer.prompt([
    {
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
      type: 'input',
      name: 'license',
      message: 'What is your license?.',
    },
  ]);
