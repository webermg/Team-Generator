// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(n,idn,em, sch) {
        super(n,idn,em);
        this.school = sch;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern