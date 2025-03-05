//UC-13 Employee payroll data
const EmployeePayroll = require("./EmployeePayroll");

console.log("Creating Employee Payroll Data...");

// Valid Employee
const emp1 = new EmployeePayroll(1, "Alice", 5000, "F", "2023-06-15");
console.log(emp1.getDetails());

// Invalid Employee ID (Zero)
const emp2 = new EmployeePayroll(0, "Bob", 7000, "M", "2022-09-10"); 

// Invalid Salary (Negative)
const emp3 = new EmployeePayroll(3, "Charlie", -6000, "M", "2021-12-01");

// Invalid Gender (Not M or F)
const emp4 = new EmployeePayroll(4, "David", 8000, "X", "2020-05-20");

// Invalid Start Date (Future Date)
const emp5 = new EmployeePayroll(5, "Eve", 9000, "F", "2030-01-01");








