// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){return this.name};
    getId(){return this.id};
    getEmail(){return this.email};
    getRole(){return 'Employee'};
};
// const employees = [
//     new Employee ('Manager', manager.id, manager.email, manager.officeNumber, manager.role ),
//     new Employee ('Engineer', engineer.id, engineer.email, engineer.gitname, engineer.role),
//     new Employee ('Intern', intern.id, intern.email, intern.school, intern.role)
// ]
module.exports = {Employee};
