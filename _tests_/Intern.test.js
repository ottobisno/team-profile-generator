const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        // Testing initialization
        it(`Should create an object with the properties 'name', 'id', 'email', and 'school' set to the corresponding arguments provided when called with the 'new' keyword`, () => {
           
            const obj = new Intern('otto', 56, 'email', 'school');

            expect(obj.name).toEqual('otto');
            expect(obj.id).toEqual(56);
            expect(obj.email).toEqual('email');
            expect(obj.school).toEqual('school');
        })
    })
    // Testing the getSchool() function
    describe('getSchool', () => {
        // Testing string input (intended input)
        it(`Should return the school specified in the 'school' argument`, () => {

            const obj = new Intern('otto', 56, 'email', 'school');

            expect(obj.getSchool()).toBe('school');
        })
        // Testing number input
        it(`Should throw an error if the 'school' argument is a number`, () => {

            const cb = () => new Intern('otto', 56, 'email', 43).getSchool();
            const err = new Error(`Expected value for 'school' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
        // Testing empty string input
        it(`Should throw an error if the 'school' argument is an empty string`, () => {

            const cb = () => new Intern('otto', 56, 'email', '').getSchool();
            const err = new Error(`Expected value for 'school' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
    })
    // Testing getRole() function
    describe('getRole', () => {
        it(`Should return 'Intern`, () => {
            const obj = new Intern('otto', 56, 'email', 'school');

            expect(obj.getRole()).toBe('Intern')
        })
    })
})