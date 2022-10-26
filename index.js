// node fs to write the file
const fs = require('fs');

// inquirer for prompting user questions
const inquirer = require('inquirer');

// import constructor functions
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// import layout template file
const generateTemplate = require('./src/layoutTemplate');

// import generate function 
const generateHtml = require('./generateHTML');

//creating empty array to store user input
const teamMembersArr = [];

// prompts fulfilled by user input
function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the employee's name.";
                }
            }
        },
        {
            type: 'input',
            message: "Employee's Email: ",
            name: 'email',
            validate: function (emailInput) {
                if (emailInput) {
                    return true;
                } else {
                    return "Please enter the employee's email address.";
                }
            }
        },
        {
            type: 'input',
            message: "Employee's ID Number: ",
            name: 'id',
            validate: function (idInput) {
                if (idInput) {
                    return true;
                } else {
                    return "Please enter the employee's numerical ID.";
                }
            }
        },
        {
            type: 'list',
            message: "Employee's Role: ",
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
        .then(answers => {
            if (answers.role === 'Manager') { // first check is if employee is a manager
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message: "Enter manager's office number: ",
                        validate: officeInput => {
                            if (officeInput) {
                                return true;
                            } else {
                                return 'Please enter a valid office number.';
                            }
                        }

                    }
                ])
                    .then(response => {
                        console.log(response.office);
                        const ManagerTeam = new Manager(answers.name, answers.email, answers.id, answers.role, response.office)
                        teamMembersArr.push(ManagerTeam);
                        addOption();
                    })
            } else if (answers.role === 'Engineer') { // then checks if an employee is an engineer
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "Enter engineer's GitHub username: ",
                        validate: githubInput => {
                            if (githubInput) {
                                return true;
                            } else {
                                return 'Please enter a valid GitHub username.';
                            }
                        }
                    }
                ])
                    .then(response => {
                        console.log(response.github);
                        const EngineerTeam = new Engineer(answers.name, answers.email, answers.id, answers.role, response.github)
                        teamMembersArr.push(EngineerTeam);
                        addOption();
                    })
            } else if (answers.role === 'Intern') { // then checks if employee is an intern
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: "Enter name of intern's school: ",
                        validate: function (schoolInput) {
                            if (schoolInput) {
                                return true;
                            } else {
                                return 'Please enter a valid school name.';
                            }
                        }

                    }
                ])
                    .then(response => {
                        console.log(response.school);
                        const internTeam = new Intern(answers.name, answers.email, answers.id, answers.role, response.school)
                        teamMembersArr.push(internTeam);
                        addOption();
                    })
            }
            // if none of the roles are valid, simply register as a basic employee
            else {
                const employeeTeam = new Employee(answers.name, answers.email, answers.id, answers.role);
                teamMembersArr.push(employeeTeam);
                addOption();
            }

            // function that prompts user to add more employees
            function addOption() {
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'addMore',
                        message: 'Will you add another employee?'
                    }
                ])
                    .then(res => {
                        if (res.addMore === true) {
                            userInfo(teamMembersArr);
                        } else {
                            console.log('team', teamMembersArr)
                            let cardHTML = generateTemplate(teamMembersArr);
                            generateHtml(cardHTML);
                        }
                    })
            }
        })
}

userInfo();
