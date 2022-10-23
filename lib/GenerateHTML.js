const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

var manager;
const engArr = [];
const internArr = [];

function defineManager(response) {
    manager = new Manager(response.name, response.id, response.email, response.officenumber);
    return response.employee_choice;
}



function generateTeam(choice) { 

    if (choice === 'Add Engineer') {
        prompt(questionsEng)
        .then(engPush)
        .then(generateTeam)
    }
    if (choice === 'Add Intern') {
        prompt(questionsIntern)
        .then(internPush)
        .then(generateTeam)
    }
    if (choice === 'Finish building team') {
        return 
    }
}

function engPush(response) {
    engArr.push(new Engineer(response.name, response.id, response.email, response.github))
    return response.employee_choice;
}

function internPush(response) {
    internArr.push(new Intern(response.name, response.id, response.email, response.github))
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
                ${engArr.forEach(engHTML)}
                ${internArr.forEach(internHTML)}
            </div>
        </div>
    </body>
    </html>`
}

function engHTML(eng) {
    return `            <div class="col-12 col-md-6 col-xl-4">
    <div class="card mx-auto mt-3 shadow">
        <div class="card-body">
        <h5 class="card-title fw-bold">${eng.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${eng.getRole()}</h6>
        <p class="card-text">ID: ${eng.getId()}</p>
        <p class="card-text">Email: ${eng.getemail()}</p>
        <p class="card-text">GitHub: ${eng.getGithub()}</p>
        </div>
    </div>
</div>`
}

function internHTML(intern) {
    return `            <div class="col-12 col-md-6 col-xl-4">
    <div class="card mx-auto mt-3 shadow">
        <div class="card-body">
        <h5 class="card-title fw-bold">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${eng.getRole()}</h6>
        <p class="card-text">ID: ${intern.getId()}</p>
        <p class="card-text">Email: ${intern.getemail()}</p>
        <p class="card-text">School: ${intern.getSchool()}</p>
        </div>
    </div>
</div>`
}
