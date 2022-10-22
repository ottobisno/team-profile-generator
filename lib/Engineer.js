const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        if (typeof this.github === 'string') {
            return this.github;
        } else {
        throw new Error('Please enter a string value');
        } 
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;