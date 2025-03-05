//UC-02
const WAGE_PER_HOUR = 20; 
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const NO_WORK_HOURS = 0;

let empCheck = Math.floor(Math.random() * 3); 
let empHours = 0;


switch (empCheck) {
    case 1:
        empHours = PART_TIME_HOURS;
        console.log("Employee worked Part Time");
        break;
    case 2:
        empHours = FULL_TIME_HOURS;
        console.log("Employee worked Full Time");
        break;
    default:
        empHours = NO_WORK_HOURS;
        console.log("Employee did not work");
        break;
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage: $" + empWage);
