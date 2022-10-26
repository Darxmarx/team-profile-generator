const employee = require ('./lib/Employee');

// name, email, id, what role
const employeeTest = new Employee ('Kirby', 'kirby@popstar.com', 2, 'Employee');

describe('Employee', () => {
    it('has a name', () => {
        expect(employeeTest.name).toEqual(expect.any(String)); // should be a string value
        expect(employeeTest.name.length).toBeGreaterThan(2); // no 2 letter long names
    })

    it('has an email', () =>{
        expect(employeeTest.email).toEqual(expect.stringContaining('@')); // all emails have the @
    })

    it('has a numerical value for an id', () => {
        expect(employeeTest.id).toEqual(expect.any(Number)); // must be a number
    })

    it('is an employee', () => {
        expect(employeeTest.role).toBe('Employee');
    })
})
