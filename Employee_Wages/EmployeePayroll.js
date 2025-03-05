class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        try {
            this.setId(id);
            this.setSalary(salary);
            this.setGender(gender);
            this.setStartDate(startDate);
            this.setName(name); 
        } catch (error) {
            console.error(error.message);
        }
    }

    setId(id) {
        if (id <= 0 || isNaN(id)) {
            throw new Error(`Invalid Employee ID: ${id}. ID must be a positive non-zero number.`);
        }
        this.id = id;
    }

    setSalary(salary) {
        if (salary <= 0 || isNaN(salary)) {
            throw new Error(`Invalid Salary: ${salary}. Salary must be a positive non-zero number.`);
        }
        this.salary = salary;
    }

    setGender(gender) {
        const genderRegex = /^[MF]$/; 
        if (!genderRegex.test(gender)) {
            throw new Error(`Invalid Gender: ${gender}. Gender must be 'M' or 'F'.`);
        }
        this.gender = gender;
    }

    setStartDate(startDate) {
        const date = new Date(startDate);
        const today = new Date();
        if (date > today) {
            throw new Error(`Invalid Start Date: ${startDate}. Start Date cannot be a future date.`);
        }
        this.startDate = date;
    }

    setName(name) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Name must start with uppercase and have at least 3 letters
        if (!nameRegex.test(name)) {
            throw new Error(`Invalid Name: ${name}. Name must start with a capital letter and have at least 3 characters.`);
        }
        this.name = name;
    }

    getFormattedDate = () => this.startDate.toDateString();
ls
    getDetails = () => 
        `ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: $${this.salary}, Start Date: ${this.getFormattedDate()}`;
}

module.exports = EmployeePayroll;


