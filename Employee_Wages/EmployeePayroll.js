class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); 
    }

    getFormattedDate = () => this.startDate.toDateString();

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.getFormattedDate()}`;
}

module.exports = EmployeePayroll;

