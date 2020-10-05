// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(n,idn,em, gh) {
        super(n,idn,em);
        this.github = gh;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer