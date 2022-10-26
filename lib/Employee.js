// employee class contstructor
// require name, id, email parameters

class Employee  {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;   
        this.role = role;
    }

    // return the data stored in the parameters
    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }
    getID() {
        return this.id;
    }

    getRole(){
        return this.role;
    }
}

module.exports = Employee; 
