// import employee class from Employee.js

const Employee = require('./Employee');
//require name, id , email, role, school name
class Intern extends Employee {
    constructor (name, email, id, role, school) {
        // use super function to call parameters from parent class constructor
        super(name, email, id, role);
        this.school = school;
    }

    // return the data stored in the engineer exclusive school parameter
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
