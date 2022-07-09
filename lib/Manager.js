// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name, role, id, email, officenumber) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
        this.officenumber = officenumber;
    }
}

module.exports = Manager;