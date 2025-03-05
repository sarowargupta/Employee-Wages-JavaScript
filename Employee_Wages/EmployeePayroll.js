class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate); 

        try {
            this.setName(name);
        } catch (error) {
            console.error(error.message);
        }
    }

    setName(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; 
        if (!nameRegex.test(name)) {
            throw new Error(`Invalid Name: ${name}. Name must start with a capital letter and have at least 3 characters.`);
        }
        this.name = name;
    }

    getFormattedDate = () => this.startDate.toDateString();

    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.getFormattedDate()}`;
}

module.exports = EmployeePayroll;


