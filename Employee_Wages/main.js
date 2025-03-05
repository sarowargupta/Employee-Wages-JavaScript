//UC-05
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

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
let totalDaysWorked = 0;

while (totalDaysWorked < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);

    if (totalWorkHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalWorkHours; 
    }

    totalWorkHours += workHours;
    totalDaysWorked++;
}

let totalWage = totalWorkHours * WAGE_PER_HOUR;
console.log(`Total Days Worked: ${totalDaysWorked}`);
console.log(`Total Hours Worked: ${totalWorkHours}`);
console.log(`Total Monthly Wage: $${totalWage}`);
