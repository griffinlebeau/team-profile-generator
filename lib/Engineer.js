const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(answers) {
        super(answers);
        this.github = answers[4];
        this.role = 'Engineer';
    }
    getGitub() {
        return `${this.github}`
    }
}

module.exports = Engineer


