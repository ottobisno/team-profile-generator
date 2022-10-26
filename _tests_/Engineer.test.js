const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        // Testing initialization
        it(`Should create an object with the properties 'name', 'id', 'email', and 'github' set to the corresponding arguments provided when called with the 'new' keyword`, () => {
           
            const obj = new Engineer('otto', 56, 'email', 'github');

            expect(obj.name).toEqual('otto');
            expect(obj.id).toEqual(56);
            expect(obj.email).toEqual('email');
            expect(obj.github).toEqual('github');
        })
    })
    // Testing the getGithub() function
    describe('getGithub', () => {
        // Testing string input (intended input)
        it(`Should return the github specified in the 'github' argument`, () => {

            const obj = new Engineer('otto', 56, 'email', 'github');

            expect(obj.getGithub()).toBe('github');
        })
        // Testing number input
        it(`Should throw an error if the 'github' argument is a number`, () => {

            const cb = () => new Engineer('otto', 56, 'email', 43).getGithub();
            const err = new Error(`Expected value for 'github' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
        // Testing empty string input
        it(`Should throw an error if the 'github' argument is an empty string`, () => {

            const cb = () => new Engineer('otto', 56, 'email', '').getGithub();
            const err = new Error(`Expected value for 'github' to be a non-empty string`);
            
            expect(cb).toThrowError(err);
            
        })
    })
    // Testing getRole() function
    describe('getRole', () => {
        it(`Should return 'Engineer`, () => {
            const obj = new Engineer('otto', 56, 'email', 'github');

            expect(obj.getRole()).toBe('Engineer')
        })
    })
})