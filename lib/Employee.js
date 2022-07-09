// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

const employees = [
    new Employee ('Manager', manager.id, manager.email, manager.offnum, manager.role ),
    new Employee ('Engineer', engineer.id, engineer.email, engineer.gitname, engineer.role),
    new Employee ('Intern', intern.id, intern.email, intern.school, intern.role)
];

module.exports = {Employee, employees};
