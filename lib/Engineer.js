// import employee class from Employee.js

const Employee = require('./Employee');
//require name, id , email, role, github username
class Engineer extends Employee {
    constructor (name, email, id, role, github) {
        // use super function to call parameters from parent class constructor
        super(name, email, id, role);
        this.github = github;
    }

    // return the data stored in the engineer exclusive github parameter
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;
