const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

mngArr = [];

function addMgr(name, id, email, office) {
    mngArr.push(new Manager(name, id, email, office))
}

addMgr('bob', 1, 'email', 'jake');
addMgr('bob', 1, 'email', 5);
addMgr('bob', 1, 'email', 5);

console.log(mngArr[0].getOfficeNumber())