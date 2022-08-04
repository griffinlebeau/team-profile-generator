class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName() {
        return `<p>${this.name}<p>`;
    }
    getId() {
        return `<p>${this.id}<p>`;
    }
    getEmail() {
        return `<p>${this.email}<p>`;
    }
    getRole() {
        return `<p>Employee<p>`
    }
}


module.exports = Employee;