const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        // Testing initialization
        it(`Should create an object with the properties 'name', 'id', 'email', and 'officeNumber' set to the corresponding arguments provided when called with the 'new' keyword`, () => {
           
            const obj = new Manager('otto', 56, 'email', 33);

            expect(obj.name).toEqual('otto');
            expect(obj.id).toEqual(56);
            expect(obj.email).toEqual('email');
            expect(obj.officeNumber).toEqual(33);
        })
    })
    // Testing the getOfficeNumber() function
    describe('getOfficeNumber', () => {
        // Testing number input (intended input)
        it(`Should return the number specified in the 'officeNumber' argument`, () => {

            const obj = new Manager('otto', 56, 'email', 33);

            expect(obj.getOfficeNumber()).toBe(33);
        })
        // Testing NaN input
        it(`Should throw an error if the 'officeNumber' argument is a string`, () => {

            const cb = () => new Manager('otto', 56, 'email', '34').getOfficeNumber();
            const err = new Error(`Expected value for 'office number' to be a non-negative number`);
            
            expect(cb).toThrowError(err);
            
        })
        // Testing negative number input
        it(`Should throw an error if the 'officeNumber' argument is an empty string`, () => {

            const cb = () => new Manager('otto', 56, 'email', -33).getOfficeNumber();
            const err = new Error(`Expected value for 'office number' to be a non-negative number`);
            
            expect(cb).toThrowError(err);
            
        })
    })
    // Testing getRole() function
    describe('getRole', () => {
        it(`Should return 'Manager`, () => {
            const obj = new Manager('otto', 56, 'email', 'OfficeNumber');

            expect(obj.getRole()).toBe('Manager')
        })
    })
})