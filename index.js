// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

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
        message: 'Enter the thumbnail link to video walk through:',
        name: 'thumbnail',
      },
      {
        type: 'input',
        message: 'Enter the video link to video walk through:',
        name: 'video',
      },
      {
        type: 'list',
        message: 'What license is being used',
        name: 'license',
        choices: ['MIT', 'Apache', 'Boost Sodftware License 1.0', 'GNU GPLv2', 'GNU GPLv2', 'ISC License', 'CCO-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0'],
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
      {
        type: 'input',
        message: 'What resources were used?',
        name: 'resources',
      },
      {
        type: 'input',
        message: 'What email is used for questions?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is github handle?',
        name: 'github',
      }
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
    
        const readmeContent = generateMarkdown(answers);
        // console.log('Generated README content:', readmeContent);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
