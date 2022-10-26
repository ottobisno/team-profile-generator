const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        // Testing initialization
        it(`Should create an object with the properties 'name', 'id', and 'email' set to the corresponding arguments provided when called with the 'new' keyword`, () => {
           
            const obj = new Employee('otto', 56, 'email');

            expect(obj.name).toEqual('otto');
            expect(obj.id).toEqual(56);
            expect(obj.email).toEqual('email');
        })
    })
    // Testing the getName() function
    describe('getName', () => {
        // Testing string input (intended input)
        it(`Should return the name specified in the 'name' argument`, () => {

            const obj = new Employee('otto', 56, 'email');

            expect(obj.getName()).toBe('otto');
        })
        // Testing number input
        it(`Should throw an error if the 'name' argument is a number`, () => {

            const cb = () => new Employee(1, 56, 'email').getName();
            const err = new Error(`Expected value for 'name' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
        // Testing empty string input
        it(`Should throw an error if the 'name' argument is an empty string`, () => {

            const cb = () => new Employee('', 56, 'email').getName();
            const err = new Error(`Expected value for 'name' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
    })
    // Testing getId() function
    describe('getId', () => {
        // Testing number input (intended input)
        it(`Should return the id specified in the 'id' argument`, () => {

            const obj = new Employee('otto', 56, 'email');

            expect(obj.getId()).toBe(56);
        })
        // Testing NaN input
        it(`Should throw an error if the 'id' argument is not a number`, () => {

            const cb = () => new Employee('otto', '56', 'email').getId();
            const err = new Error(`Expected value for 'id' to be a non-negative number`);
            
            expect(cb).toThrowError(err);
        })
        // Testing negative number input
        it(`Should throw an error if the 'id' argument is not a non-negative number`, () => {

            const cb = () => new Employee('otto', -56, 'email').getId();
            const err = new Error(`Expected value for 'id' to be a non-negative number`);
            
            expect(cb).toThrowError(err);
        })
    })
    // Testing getEmail() function
    describe('getEmail', () => {
        //Testing string input (intended input)
        it(`Should return the email specified in the 'email' argument`, () => {

            const obj = new Employee('otto', 56, 'email');

            expect(obj.getEmail()).toBe('email');
        })
        // Testing number input
        it(`Should throw an error if the 'email' argument is a number`, () => {

            const cb = () => new Employee('otto', 56, 32).getEmail();
            const err = new Error(`Expected value for 'email' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
        // Testing empty string input
        it(`Should throw an error if the 'email' argument is an empty string`, () => {

            const cb = () => new Employee('otto', 56, '').getEmail();
            const err = new Error(`Expected value for 'email' to be a non-empty string`);
            
            expect(cb).toThrowError(err);  
        })
    })
    // Testing getRole() function
    describe('getRole', () => {
        it(`Should return 'Employee`, () => {
            const obj = new Employee('otto', 56, 'email');

            expect(obj.getRole()).toBe('Employee')
        })
    })
})