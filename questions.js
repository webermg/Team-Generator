const questions = [
  {
    type: 'list',
    name: 'role',
    message: "Which to add?",
    choices: ["Engineer", "Manager", "Intern"]
  },
  {
    type: 'input',
    name: "name",
    message: "Name?"
  },
  {
    type: 'input',
    name: "id",
    message: "ID?"
  },
  {
    type: 'input',
    name: "email",
    message: "Email?"
  },
  {
    type: 'input',
    name: "officeNum",
    message: "Office Number?",
    when: answers => answers.role === "Manager"
  },
  {
    type: 'input',
    name: "github",
    message: "GitHub?",
    when: answers => answers.role === "Engineer"
  },
  {
    type: 'input',
    name: "school",
    message: "School?",
    when: answers => answers.role === "Intern"
  },
 
  {
    type: "confirm",
    name: 'askAgain',
    message: "Add another?"
  }
];

module.exports = questions;