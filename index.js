// Importing necessary modules and classes
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Questions to be asked initially, before choosing additional employees
const questionsInitial = [
    {
        name: 'name',
        type: 'input',
        message: `What is the manager's name? `
    },
    {
        name: 'id',
        type: 'number',
        message: `What is your team manager's employee ID? `
    },
    {
        name: 'email',
        type: 'input',
        message: `What is your team manager's email address? `
    },
    {
        name: 'officeNumber',
        type: 'number',
        message: `What is your team manager's office number? `
    },
    {
        name: 'employee_choice',
        type: 'list',
        message: 'Who does the rest of the team consist of? ',
        choices: ['Add Engineer', 'Add Intern', 'Finish building team']
    }
]

// Questions to be asked if an Engineer is to be added to the team
const questionsEng = [
    {
        name: 'name',
        type: 'input',
        message: `What is the engineer's name? `
    },
    {
        name: 'id',
        type: 'number',
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

// Questions to be asked if an Intern is to be added to the team
const questionsIntern = [
    {
        name: 'name',
        type: 'input',
        message: `What is the intern's name? `
    },
    {
        name: 'id',
        type: 'number',
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

// Defining a variable for the manager of the team and an array for each employee added
var manager;
const employeesArr = [];

// Creating a class for the manager once responses are received initially
function defineManager(response) {
    manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    return response.employee_choice;
}

// Allows the user to keep adding Engineers or Interns to the team until the team is complete
function generateTeam(choice) { 

    if (choice === 'Add Engineer') {
        inquirer
            .prompt(questionsEng)
            .then(engPush)
            .then(generateTeam)
    }
    if (choice === 'Add Intern') {
        inquirer
            .prompt(questionsIntern)
            .then(internPush)
            .then(generateTeam)
    }
    if (choice === 'Finish building team') {
        return writeToFile();
    }
}

// Adds any Engineers created to the employees array
function engPush(response) {
    employeesArr.push(new Engineer(response.name, response.id, response.email, response.github))
    return response.employee_choice;
}

// Adds any Interns created to the employees array
function internPush(response) {
    employeesArr.push(new Intern(response.name, response.id, response.email, response.school))
    return response.employee_choice;
}

// Creates the HTML file based on user input, styled with bootstrap
function generateHTML(manager, employeesArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="w-100 bg-dark p-5">
            <h1 class="text-light text-center fw-bold">My Team</h1>
        </header>

        <div class="container-sm" style="max-width: 1000px;">
            <div class="row justify-content-evenly">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">${manager.getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
                        <p class="card-text">ID: ${manager.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                        </div>
                    </div>
                </div>
                ${employeesHTML(employeesArr)}
            </div>
        </div>
    </body>
    </html>`
}

// Checks the employees array and creates a card in the html for each employee specified
function employeesHTML(employeesArr) {
    let htmlArr = [];

    if (employeesArr.length > 0) {
        for (let i = 0; i < employeesArr.length; i++) {
            let engOrIntern = '';

            if (employeesArr[i].getRole() === 'Engineer') {
                engOrIntern = `GitHub: <a href="https://github.com/${employeesArr[i].getGithub()}">${employeesArr[i].getGithub()}</a>`;
            } else {
                engOrIntern = `School: ${employeesArr[i].getSchool()}`;
            }

            let html = `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">${employeesArr[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${employeesArr[i].getRole()}</h6>
                        <p class="card-text">ID: ${employeesArr[i].getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${employeesArr[i].getEmail()}">${employeesArr[i].getEmail()}</a></p>
                        <p class="card-text">${engOrIntern}</p>
                        </div>
                    </div>
                </div>
                `
            htmlArr.push(html);
        }
        let htmlEmployees = htmlArr.join('');
        return htmlEmployees;
        
    } else {
        return '';
    }
}

// Function to generate the HTML file
function writeToFile() {
    const HTMLContent = generateHTML(manager, employeesArr);

    fs.writeFile('./dist/index.html', HTMLContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the html file.'))
}

// Function to initialize the app with inquirer
function Init() {
    inquirer
        .prompt(questionsInitial)
        .then(defineManager)
        .then(generateTeam)
}

// Initializing the app
Init();