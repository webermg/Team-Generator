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
    message: "Team member's name?"
  },
  {
    type: 'input',
    name: "id",
    message: "Team member's ID?"
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
    when: answers => answers.role === "Manager"
  },
  {
    type: 'input',
    name: "github",
    message: "Engineer's GitHub name?",
    when: answers => answers.role === "Engineer"
  },
  {
    type: 'input',
    name: "school",
    message: "Intern's school name?",
    when: answers => answers.role === "Intern"
  },
 
  {
    type: "confirm",
    name: 'askAgain',
    message: "Would you like to add another?"
  }
];

module.exports = questions;