//UC-13 Employee payroll data
const EmployeePayroll = require("./EmployeePayroll");

console.log("Creating Employee Payroll Data...");

// Valid Employee
const emp1 = new EmployeePayroll(1, "Alice", 5000, "Female", "2023-06-15");
console.log(emp1.getDetails());

// Invalid Employee Name (Should throw an error)
const emp2 = new EmployeePayroll(2, "bob", 7000, "Male", "2022-09-10"); // Starts with lowercase
const emp3 = new EmployeePayroll(3, "Jo", 6000, "Male", "2021-12-01");  // Less than 3 characters







