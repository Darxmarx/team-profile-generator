const engineer = require ('../lib/Engineer');

// name, email, id, what role, github username
const engineerTest = new Employee ('Dedede', 'thetrueking@popstar.com', 1, 'Engineer', 'dededeHub');

describe('Engineer', () => {
    it('has a name', () => {
        expect(engineerTest.name).toEqual(expect.any(String)); // should be a string value
        expect(engineerTest.name.length).toBeGreaterThan(2); // no 2 letter long names
    })

    it('has an email', () =>{
        expect(engineerTest.email).toEqual(expect.stringContaining('@')); // all emails have the @
    })

    it('has a numerical value for an id', () => {
        expect(engineerTest.id).toEqual(expect.any(Number)); // must be a number
    })

    it('is an engineer', () => {
        expect(engineerTest.role).toBe('Engineer');
    })

    it('has a github username', () => {
        keys = Object.keys(engineerTest);
        optionKey = keys[4];
        expect(optionKey).toBe('github');
        expect(engineerTest.gitHub).toEqual(expect.any(String));
    })
})
