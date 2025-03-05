//UC-12 Employee payroll data
const EmployeePayroll = require("./EmployeePayroll");

const emp1 = new EmployeePayroll(1, "Alice", 5000, "Female", "2023-06-15");
const emp2 = new EmployeePayroll(2, "Bob", 7000, "Male", "2022-09-10");
const emp3 = new EmployeePayroll(3, "Charlie", 6000, "Male", "2021-12-01");

const employees = [emp1, emp2, emp3];

console.log("Employee Payroll Data:");
employees.forEach(emp => console.log(emp.getDetails()));






