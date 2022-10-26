const manager = require ('../lib/Manager');

// name, email, id, what role, office number
const managerTest = new Manager ('Meta Knight', 'strongestinthegalaxy@popstar.com', 4, 'Manager', '777');

describe('Intern', () => {
    it('has a name', () => {
        expect(managerTest.name).toEqual(expect.any(String)); // should be a string value
        expect(managerTest.name.length).toBeGreaterThan(2); // no 2 letter long names
    })

    it('has an email', () =>{
        expect(managerTest.email).toEqual(expect.stringContaining('@')); // all emails have the @
    })

    it('has a numerical value for an id', () => {
        expect(managerTest.id).toEqual(expect.any(Number)); // must be a number
    })

    it('is an intern', () => {
        expect(managerTest.role).toBe('Manager');
    })

    it('has a numerical value for an office number', () => {
        keys = Object.keys(managerTest);
        optionKey = keys[4];
        expect(optionKey).toBe('office');
        expect(managerTest.office).toEqual(expect.any(Number));
    })
})
