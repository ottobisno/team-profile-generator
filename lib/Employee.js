class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (typeof this.name === 'string') {
            return this.name;
        } else {
            throw new Error('Please enter a string value');
        }
    }

    getId() {
        if (typeof this.id === 'number') {
            return this.id;
        } else {
            throw new Error('Please enter a number value');
        } 
    }

    getEmail() {
        if (typeof this.email ==='string') {
            return this.email;
        } else {
            throw new Error('Please enter a string value');
        }
    }

    getRole() {
        return 'Employee'
    } 
}

module.exports = Employee;