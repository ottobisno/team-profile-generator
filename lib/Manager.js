const Employee = require('./Employee');

// Defining a Manager class which extends the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        if (typeof this.officeNumber !== "number" || isNaN(this.officeNumber) || this.officeNumber < 0) {
            throw new Error(`Expected value for 'office number' to be a non-negative number`);
        }
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }
} 

module.exports = Manager;