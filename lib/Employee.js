class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName() {
        return `<${this.name}`;
    }
    getId() {
        return `<p>${this.id}<`;
    }
    getEmail() {
        return `${this.email}`;
    }
    getRole() {
        return `Employee`
    }
}


module.exports = Employee;