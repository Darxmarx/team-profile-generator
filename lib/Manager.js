// import employee class from Employee.js

const Employee = require('./Employee');
//require name, id , email, role, office number
class Manager extends Employee {
    constructor (name, email, id, role, office) {
        // use super function to call parameters from parent class constructor
        super(name, email, id, role);
        this.office = office;
    }

    // return the data stored in the manager exclusive office parameter
    getOffice() {
        return this.office;
    }
}

module.exports = Manager;
