const fs = require('fs');
const inquirer = require('inquirer');

const questionsInitial = [
    {
        name: 'name',
        type: 'input',
        message: `What is the manager's name? `
    },
    {
        name: 'id',
        type: 'input',
        message: `What is your team manager's employee ID? `
    },
    {
        name: 'email',
        type: 'input',
        message: `What is your team manager's email address? `
    },
    {
        name: 'office_number',
        type: 'input',
        message: `What is your team manager's office number? `
    },
    {
        name: 'employee_choice',
        type: 'list',
        message: 'Who does the rest of the team consist of? ',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team']
    }
]

const questionsEng = [
    {
        name: 'name',
        type: 'input',
        message: `What is the engineer's name? `
    },
    {
        name: 'id',
        type: 'input',
        message: `What is the engineer's employee ID? `
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the engineer's email address? `
    },
    {
        name: 'github',
        type: 'input',
        message: `What is the engineer's GitHub username? `
    },
    {
        name: 'employee_choice',
        type: 'list',
        message: 'Who does the rest of the team consist of? ',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team']
    }
]

const questionsIntern = [
    {
        name: 'name',
        type: 'input',
        message: `What is the intern's name? `
    },
    {
        name: 'id',
        type: 'input',
        message: `What is the intern's employee ID? `
    },
    {
        name: 'email',
        type: 'input',
        message: `What is the intern's email address? `
    },
    {
        name: 'school',
        type: 'input',
        message: `What school does the intern attend? `
    },
    {
        name: 'employee_choice',
        type: 'list',
        message: 'Who does the rest of the team consist of? ',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team']
    }
]


function Init() {
    inquirer
        .prompt(questionsInitial)
        .then(defineManager)
        .then(generateTeam)
        // .then(writeToFile);
}