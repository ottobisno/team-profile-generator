const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        if (typeof this.github !== "string" || !this.github.trim().length) {
            throw new Error(`Expected value for 'github' to be a non-empty string`);
        } 
        return this.github; 
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;