// node modules
const inquirer = require("inquirer");
const fs = require("fs")


// lib modules 
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

// template module
const genSite = require('./src/genSite')

const team = []

// initialization function that starts the application

const questions = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Please pick a role for your employee",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ]).then(
        (answers) => {
            if (answers.role === 'Intern') {
                genIntern()
            } else if (answers.role === 'Engineer') {
                genEngineer()
            } else{
                genManager()
            }
        }
    )
}

// genIntern function that prompts user for name,id,email,school
const genIntern = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
    {
    type: 'input',
    name: 'school',
    message: 'What is the name of your School?',
    },
])
const {name,id,email,school} = answers
const newIntern = new Intern(name,id,email,school)
team.push(newIntern)

ask(team)
}

// genEngineer function that prompts user for name,id,email,github
const genEngineer = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
    type: 'input',
    name: 'id',
    message: 'What is your ID number?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub?',
    },
])
const {name,id,email,github} = answers
const newEngineer = new Engineer(name,id,email,github)
team.push(newEngineer)

ask(team)
}

// genManager function that prompts user for name,id,email,officeid
const genManager = async () => {

    const answers = await inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Name of person?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'office',
        message: 'What is your office number?',
    },
])
const {name,id,email,office}=answers
const newManager = new Manager(name,id,email,office)
team.push(newManager)

ask(team)
}

// Last ask function loops in case the user wants to add more team members after initial prompts. 
const ask = async (team) => {
    const answers = await inquirer.prompt({
        type: "confirm",
        name: "ask",
        message: "Do you want to add anymore team members?",
        default: false
    })
    if (answers.ask){questions()}
    else{genHTML(team)}
}

// function that actually generates the file and path 
const genHTML = (team) => {
    fs.writeFileSync('./dist/team.html', genSite(team), 'utf-8')
}

questions()
