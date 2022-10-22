const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        if (typeof this.school === 'string') {
            return this.school;
        } else {
            throw new Error('Please enter a string value');
        }
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;