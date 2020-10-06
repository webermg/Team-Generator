const questions = [
  {
    type: 'list',
    name: 'role',
    message: "Which team member do you want to add?",
    choices: ["Engineer", "Manager", "Intern"]
  },
  {
    type: 'input',
    name: "name",
    message: "Team member's name?",
    validate: answer => /\S+/.test(answer) ? true : "Input must not be empty"
  },
  {
    type: 'input',
    name: "id",
    message: "Team member's ID?",
    validate: answer => /\S+/.test(answer) ? true : "Input must not be empty"
  },
  {
    type: 'input',
    name: "email",
    message: "Team member's email?",
    validate: answer => /\S+@\S+\.\S+/.test(answer) ? true : "Email must be in valid format"
  },
  {
    type: 'input',
    name: "officeNum",
    message: "Manager's office number?",
    when: answers => answers.role === "Manager",
    validate: answer => /\S+/.test(answer) ? true : "Input must not be empty"
  },
  {
    type: 'input',
    name: "github",
    message: "Engineer's GitHub name?",
    when: answers => answers.role === "Engineer",
    validate: answer => /\S+/.test(answer) ? true : "Input must not be empty"
  },
  {
    type: 'input',
    name: "school",
    message: "Intern's school name?",
    when: answers => answers.role === "Intern",
    validate: answer => /\S+/.test(answer) ? true : "Input must not be empty"
  },
 
  {
    type: "confirm",
    name: 'askAgain',
    message: "Would you like to add another?"
  }
];

module.exports = questions;