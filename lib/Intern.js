const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        if (typeof this.school !== "string" || !this.school.trim().length) {
            throw new Error(`Expected value for 'school' to be a non-empty string`);
        } 
        return this.school; 
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;