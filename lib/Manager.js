const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    // Info from Employee Super Constructor
        super(name, id, email); 
        this.officeNumber = officeNumber; 
    } 
    // Methods
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'; 
    }
};

module.exports = Manager; 