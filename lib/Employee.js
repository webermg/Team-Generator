// TODO: Write code to define and export the Employee class
class Employee {
    constructor(n, idn, em) {
        this.name = n;
        this.id = idn;
        this.email = em;
    }

    getName() {
        return this.name;
    }
}

module.exports = Employee;