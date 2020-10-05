// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(n, idn, em, offNum) {
        super(n,idn,em);
        this.officeNumber = offNum;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;