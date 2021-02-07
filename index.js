// Node Modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// (Prompt) User questions to populate the README.md
const promptUser = [{
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'project ',
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
];

//GitHub API goes here
const generateFile = (answers) =>
    `## Github name
${answers.name}
`





// .....
// const writeToFile = (generateFile, input) => {
//     fs.writeFile(README.md), generateMarkdown, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("You're good to go!")
//             return fs.writeFileSync(path.join(generate(data), input))
//         }
//     }
// };

// 
const runPrompts = () => {
    inquirer.prompt(promptUser)
        .then((responses) => {
            console.log("README.md is in process");
            let  = generateMarkdown(data);
            fs.writeFile("README.md", generateMarkdown(data), (err) => {
                err ? console.log(err) : console.log("README has been created");
            })
        });
}

runPrompts();


function init() {

}

init();

// fs.writeToFile (README.md), READMEfile, err => {
//     if (err) {
//         console.log(err);
// } else {
//         console.log("You're good to go!")
// }
// };

// // what is this function doing
// const writeToFile = (fileName, input) => {
//     return fs.writeFileSync(path.join(fileName, input))
// }

// // what is this function doing
// const runPrompts = () => {
//     inquirer.prompt(promptUser)
//         .then((responses) => {
//             console.log("README.md is in process");
//             writeToFile("README.md", generateMarkdown({
//                 ...responses
//             }))
//         })
// }
// runPrompts();