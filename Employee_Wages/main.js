//UC-11 Employee Payroll Data

const EmployeePayroll = require("./EmployeePayroll");

const emp1 = new EmployeePayroll(1, "Alice", 5000);
const emp2 = new EmployeePayroll(2, "Bob", 7000);
const emp3 = new EmployeePayroll(3, "Charlie", 6000);

const employees = [emp1, emp2, emp3];

console.log("Employee Payroll Data:");
employees.forEach(emp => console.log(emp.getDetails()));





