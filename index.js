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

function writeToFile() {
    const HTMLContent = generateHTML(manager, engArr, internArr);

    fs.writeFile('tester.html', HTMLContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the html file.'))
}

function Init() {
    inquirer
        .prompt(questionsInitial)
        .then(defineManager)
        .then(generateTeam)
}

Init();

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var manager;
const engArr = [];
const internArr = [];

function defineManager(response) {
    manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    return response.employee_choice;
}



function generateTeam(choice) { 

    //change this back to below if statement (will prob need to change these anyways though)
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

function engPush(response) {
    engArr.push(new Engineer(response.name, response.id, response.email, response.github))
    return response.employee_choice;
}

function internPush(response) {
    internArr.push(new Intern(response.name, response.id, response.email, response.school))
    return response.employee_choice;
}

function generateHTML(manager, engArr, internArr) {
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
                        <p class="card-text">Email: ${manager.getEmail()}</p>
                        <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                        </div>
                    </div>
                </div>
                ${engHTML(engArr)}
                ${internHTML(internArr)}
            </div>
        </div>
    </body>
    </html>`
}

// function eng(value) {
//     return `<div class="col-12 col-md-6 col-xl-4">
//             <div class="card mx-auto mt-3 shadow">
//                 <div class="card-body">
//                 <h5 class="card-title fw-bold">${value.getName()}</h5>
//                 <h6 class="card-subtitle mb-2 text-muted">${value.getRole()}</h6>
//                 <p class="card-text">ID: ${value.getId()}</p>
//                 <p class="card-text">Email: ${value.getEmail()}</p>
//                 <p class="card-text">GitHub: ${value.getGithub()}</p>
//                 </div>
//             </div>
//         </div>`
// }




function engHTML(engArr) {
    let htmlArr = [];

    if (engArr.length > 0) {
        for (let i = 0; i < engArr.length; i++) {
            let html = `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">${engArr[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${engArr[i].getRole()}</h6>
                        <p class="card-text">ID: ${engArr[i].getId()}</p>
                        <p class="card-text">Email: ${engArr[i].getEmail()}</p>
                        <p class="card-text">GitHub: ${engArr[i].getGithub()}</p>
                        </div>
                    </div>
                </div>
                `
            htmlArr.push(html);
        }
        let htmlEng = htmlArr.join('');
        return htmlEng;
        
    } else {
        return '';
    }
}

function internHTML(internArr) {
    let htmlArr = [];

    if (internArr.length > 0) {
        for (let i = 0; i < internArr.length; i++) {
            let html = `
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card mx-auto mt-3 shadow">
                        <div class="card-body">
                        <h5 class="card-title fw-bold">${internArr[i].getName()}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${internArr[i].getRole()}</h6>
                        <p class="card-text">ID: ${internArr[i].getId()}</p>
                        <p class="card-text">Email: ${internArr[i].getEmail()}</p>
                        <p class="card-text">School: ${internArr[i].getSchool()}</p>
                        </div>
                    </div>
                </div>
                `
            
            htmlArr.push(html);
        }
        let htmlIntern = htmlArr.join('');
        return htmlIntern;

    } else {
        return '';
    }
}