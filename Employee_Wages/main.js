//UC-09
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
let dailyWageMap = new Map(); 
let dailyHourMap = new Map(); 

while (totalDaysWorked < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);

    if (totalWorkHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalWorkHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalWorkHours += workHours;
    totalDaysWorked++;

    dailyWageMap.set(totalDaysWorked, dailyWage);
    dailyHourMap.set(totalDaysWorked, workHours);
}

const totalWage = Array.from(dailyWageMap.values()).reduce((sum, wage) => sum + wage, 0);
const totalHoursWorked = Array.from(dailyHourMap.values()).reduce((sum, hours) => sum + hours, 0);

console.log(`Total Days Worked: ${totalDaysWorked}`);
console.log(`Total Hours Worked: ${totalHoursWorked}`);
console.log(`Total Monthly Wage: $${totalWage}`);

const fullWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === FULL_TIME_HOURS)
    .map(([day]) => `Day ${day}`);

const partWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === PART_TIME_HOURS)
    .map(([day]) => `Day ${day}`);

const noWorkingDays = Array.from(dailyHourMap)
    .filter(([day, hours]) => hours === 0)
    .map(([day]) => `Day ${day}`);

console.log("Full Working Days:", fullWorkingDays);
console.log("Part Working Days:", partWorkingDays);
console.log("No Working Days:", noWorkingDays);



