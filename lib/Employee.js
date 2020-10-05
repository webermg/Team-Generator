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

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.constructor.name;
    }
}

module.exports = Employee;