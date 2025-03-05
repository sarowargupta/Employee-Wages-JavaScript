//UC-04
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const WORKING_DAYS_PER_MONTH = 20;

function getWorkHours(workType) {
    switch (workType) {
        case 1:
            console.log("Employee worked Part Time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work");
            return 0;
    }
}

let totalWorkHours = 0;
for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);
    totalWorkHours += workHours;
}

let monthlyWage = totalWorkHours * WAGE_PER_HOUR;
console.log("Total Monthly Wage: $" + monthlyWage);

