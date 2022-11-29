const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
    // Info from Employee Super Constructor
        super(name, id, email); 
        this.github = github; 
    } 
    // Methods
    getGithub() {
        return this.github; 
    }

    getRole() {
        return 'Engineer'; 
    }
};

module.exports = Engineer; 