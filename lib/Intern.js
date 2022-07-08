const Employee = require('./Employee');

class Intern extends Employee {
    constructor(answers) {
        super(answers);
        this.school = answers[4];
        this.role = 'Intern';
        }
        getSchool() {
            return `${this.school}`
        }
    }

module.exports = Intern