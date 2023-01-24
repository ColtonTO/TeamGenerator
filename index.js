// node modules
const inquirer = require("inquirer");
const fs = require("fs")


// lib modules 
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")

const questions = async () => {
    const answers = await inquirer 
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "list",
            message: "Please pick a role",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"],
        },
    ])
}

