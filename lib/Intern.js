const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
    // Info from Employee Super Constructor
        super(name, id, email); 
        this.school = school;
    } 
    // Methods
    getSchool() {
        return this.school; 
    }

    getRole() {
        return 'Intern'; 
    }
};

module.exports = Intern; 