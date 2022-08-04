const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = [];
const builder = require('./lib/builder.js');

function initializeBuilder(){
        inquirer
            .prompt([
                {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?"
                },
                {
                type: 'input',
                name: 'id',
                message: "What is the team manager's employee id?"
                },
                {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?"
                },
                {
                type: 'input',
                name: 'office',
                message: "What is the team manager's office number?"
                },
                {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add a team member?',
                defaut: false
                }])
            .then(response => {
                const { name, id, email, office } = response
                const manager = new Manager(name, id, email, office);
                employees.push(manager);
                console.log('Added team manager!');
                if (response.confirmAdd === true) {
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
        name: 'list',
        choices: ['Engineer', 'Intern', 'Finish']
    })
    .then(response => {
        if (response.list === 'Engineer') {
            promptEngineer();

        }
        else if (response.list === 'Intern') {
            promptIntern();
        }
        else {
            htmlBuilder(employees);
        }
    }
    )}    

const promptEngineer = () => {
    inquirer.prompt([
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
    ])
    .then(response => {
        const { name, id, email, github } = response
        const engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        console.log("Added engineer to team!")
        if (response.confirmAdd === true) {
            promptEmployee();
        }
        else {
            htmlBuilder(employees)
        }
    })
}

const promptIntern = () => {
    inquirer.prompt([
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
    }])
    .then(response => {
        const { name, id, email, school } = response
        const intern = new Intern(name, id, email, school);
        employees.push(intern);
        if (response.confirmAdd === true) {
            promptEmployee();
        }
        else {
            htmlBuilder(employees)
        }
    })
}

const htmlBuilder = employees => {
    var html = builder.templateBuilder(employees)
    fs.writeFile('./dist/template.html', html, err => {
        if (err) {
            throw (err)
        }
    })
}

initializeBuilder();
