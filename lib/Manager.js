// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        
        super(name, id, email);
        this.officeNumber = officenumber;
    }
    getRole(){return 'Manager'};
    getOfficeNumber(){return this.officeNumber};
};

module.exports = Manager;