const Employee = require('./Employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers);
        this.office = answers[4]
        this.role = 'Manager';
    }
}
module.exports = Manager