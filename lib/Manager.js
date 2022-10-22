const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        if (typeof this.officeNumber === 'number') {
            return this.officeNumber;
        } else {
            throw new Error('Please enter a nubmer value');
        }
    }

    getRole() {
        return 'Manager'
    }
} 

module.exports = Manager;