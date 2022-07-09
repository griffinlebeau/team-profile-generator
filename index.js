const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = [];
const htmlBuilder = require('./lib/builder.js');

const initializeBuilder = () => {
        inquirer
            .prompt(
                {
                type: 'text',
                name: 'manager',
                message: "What is the team manager's name?"
                },
                {
                type: 'text',
                name: 'id',
                message: "What is the team manager's employee id?"
                },
                {
                type: 'text',
                name: 'email',
                message: "What is the team manager's email?"
                },
                {
                type: 'text',
                name: 'office',
                message: "What is the team manager's office number?"
                },
                {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add a team member?',
                defaut: false
                })
            .then(({ answers }) => {
                const { name, id, email, office} = answers
                const manager = new Manager(name, id, email, office);
                employees.push(manager);
                console.log('Added team manager!');
                if (!answers.confirmAdd) {
                    promptEmployee()
                }
                else {
                    htmlBuilder(employees);
                }
            
        })
    }

const promptEmployee = () => {
    inquirer
    .prompt(
    {
        type: 'list',
        message: 'Add team members:',
        name: 'listBuilder',
        choices: ['Engineer', 'Intern', 'Finish']
    })
    .then(answers => {
        if (answers.listBuilder === 'Engineer') {
            promptEngineer();

        }
        else if (answers.listBuilder === 'Intern') {
            promptIntern();
        }
        else {
            htmlBuilder(employees);
        }
    }
    )}    

const promptEngineer = () => {
    inquirer.prompt(
        {
            type: 'text',
            name: 'name',
            message: "What is the Engineer's name?",
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Engineer's employee id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Engineer's email address",
        },
        {
            type: 'text',
            name: 'github',
            message: "Enter the Engineer's github:",
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: false
        }
    )
    .then(({ answers }) => {
        const { name, id, email, github } = answers
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        if (!answers.confirmAdd) {
            htmlBuilder(employees)
        }
        else {
            promptEmployee();
        }
    })
}

const promptIntern = () => {
    inquirer.prompt(
        {
            type: 'text',
            name: 'name',
            message: "What is the Intern's name?",
        },
        {
            type: 'text',
            name: 'id',
            message: "What is the Intern's employee id?"
        },
        {
            type: 'text',
            name: 'email',
            message: "What is the Intern's email address",
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school does the Intern go to?'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: false
        }
    .then(({ answers }) => {
        const { name, id, email, school } = answers
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        if (!answers.confirmAdd) {
            htmlBuilder(employees)
        } else {
            promptEmployee();
        }
    }))
}

const htmlBuilder = employees => {
    const employeeHtml = templateBuilder(employees);
    fs.writeFile('./dist/template.html', employeeHtml, err => {
        if (err) {
            throw (err)
        }
    })
}

initializeBuilder();
