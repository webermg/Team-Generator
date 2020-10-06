const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

createEmployee = (answers) => {
  switch (answers.role) {
    case "Manager":
      return new Manager(answers.name, answers.id, answers.email, answers.officeNum);
    case "Engineer":
      return new Engineer(answers.name, answers.id, answers.email, answers.github);
    case "Intern":
      return new Intern(answers.name, answers.id, answers.email, answers.school);
    default:
      return new Employee(answers.name, answers.id, answers.email);
  }
}

  ; (() => {
    const output = [];
    const ask = () => {
      inquirer.prompt(questions).then((answers) => {
        output.push(createEmployee(answers));
        if (answers.askAgain) {
          ask();
        }
        else {
          if(output.length === 0) return;
          fs.writeFile(outputPath, render(output), (e) => {
            if (e) console.log(e);
          })
        }
      });
    }
    ask();
  })()

