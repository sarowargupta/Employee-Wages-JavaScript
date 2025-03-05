//UC-11
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

const getWorkHours = (workType) => {
    switch (workType) {
        case 1: return PART_TIME_HOURS;
        case 2: return FULL_TIME_HOURS;
        default: return 0;
    }
};

let totalWorkHours = 0;
let totalDaysWorked = 0;
let workLog = [];

while (totalDaysWorked < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);

    if (totalWorkHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalWorkHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalWorkHours += workHours;
    totalDaysWorked++;

    workLog.push({
        day: totalDaysWorked,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });
}

const totalWage = workLog.reduce((sum, entry) => sum + entry.wageEarned, 0);
const totalHoursWorked = workLog.reduce((sum, entry) => sum + entry.hoursWorked, 0);
console.log(`Total Hours Worked: ${totalHoursWorked}`);
console.log(`Total Monthly Wage: $${totalWage}`);

console.log("Full Working Days:");
workLog.forEach(entry => {
    if (entry.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${entry.day} -> Hours: ${entry.hoursWorked}, Wage: $${entry.wageEarned}`);
    }
});

const partWorkingDays = workLog
    .filter(entry => entry.hoursWorked === PART_TIME_HOURS)
    .map(entry => `Day ${entry.day}`);
console.log("Part Working Days:", partWorkingDays);

const noWorkingDays = workLog
    .filter(entry => entry.hoursWorked === 0)
    .map(entry => `Day ${entry.day}`);
console.log("No Working Days:", noWorkingDays);




