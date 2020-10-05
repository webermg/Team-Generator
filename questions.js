const questions = [
  {
    type: 'list',
    name: 'role',
    message: "Which to add?",
    choices: ["Engineer", "Manager", "Intern"]
  },
  {
    type: "confirm",
    name: 'askAgain',
    message: "Add another?"
  }
];

module.exports = questions;