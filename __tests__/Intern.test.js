const intern = require ('../lib/Intern');

// name, email, id, what role, school name
const internTest = new Intern ('Bandana Dee', 'littleguy@popstar.com', 3, 'Intern', 'Dee University');

describe('Intern', () => {
    it('has a name', () => {
        expect(internTest.name).toEqual(expect.any(String)); // should be a string value
        expect(internTest.name.length).toBeGreaterThan(2); // no 2 letter long names
    })

    it('has an email', () =>{
        expect(internTest.email).toEqual(expect.stringContaining('@')); // all emails have the @
    })

    it('has a numerical value for an id', () => {
        expect(internTest.id).toEqual(expect.any(Number)); // must be a number
    })

    it('is an intern', () => {
        expect(internTest.role).toBe('Intern');
    })

    it('belongs to a school', () => {
        keys = Object.keys(internTest);
        optionKey = keys[4];
        expect(optionKey).toBe('school');
        expect(internTest.school).toEqual(expect.any(String));
    })
})
