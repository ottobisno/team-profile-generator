class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        if (typeof this.name !== "string" || !this.name.trim().length) {
            throw new Error(`Expected value for 'name' to be a non-empty string`);
        } 
        return this.name; 
    }

    getId() {
        if (typeof this.id !== "number" || isNaN(this.id) || this.id < 0) {
            throw new Error(`Expected value for 'id' to be a non-negative number`);
        }
        return this.id;
    }

    getEmail() {
        if (typeof this.email !== "string" || !this.email.trim().length) {
            throw new Error(`Expected value for 'email' to be a non-empty string`);
            
        }
        return this.email;
    }

    getRole() {
        return 'Employee'
    } 
}

module.exports = Employee;