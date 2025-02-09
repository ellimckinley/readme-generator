// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input: description, 
// installation instructions, usage information, contribution g
// uidelines, and test instructions
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'projectTitle',
      },
      {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installationInst',
      },
      {
        type: 'input',
        message: 'What is the usage information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines',
        name: 'contributionGL',
      },
      {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testInst',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log('README file created successfully.')
      );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateREADME(answers);
        writeToFile('README.md', readmeContent);
    });
}

function generateREADME(data) {
    return `# ${data.projectTitle}

## Description
${data.description}

## Installation Instructions
${data.installationInst}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contributionGL}

## Test Instructions
${data.testInst}
`;
}

// Function call to initialize app
init();
