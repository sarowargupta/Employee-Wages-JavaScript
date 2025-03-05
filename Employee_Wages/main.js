//UC-07
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

function getWorkHours(workType) {
    switch (workType) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalWorkHours = 0;
let totalDaysWorked = 0;
let dailyWages = []; 
let dailyWorkHours = []; 

while (totalDaysWorked < MAX_WORKING_DAYS && totalWorkHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);

    if (totalWorkHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalWorkHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    dailyWages.push(dailyWage); 
    dailyWorkHours.push(workHours); 

    totalWorkHours += workHours;
    totalDaysWorked++;
}

let totalWage = dailyWages.reduce((sum, wage) => sum + wage, 0);
console.log(`Total Monthly Wage: $${totalWage}`);

let dailyWageWithDay = dailyWages.map((wage, index) => `Day ${index + 1}: $${wage}`);
console.log("Daily Wage with Day:");
console.log(dailyWageWithDay);

let fullTimeDays = dailyWages
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter(day => day.wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(day => `Day ${day.day}`);

console.log("Days when Full Time Wage ($160) was earned:");
console.log(fullTimeDays);

let firstFullTimeDay = dailyWages.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`First Full Time Wage Day: $${firstFullTimeDay}`);

let allFullTime = dailyWages.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Every Day is Full Time: ${allFullTime}`);

let hasPartTime = dailyWages.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Any Part Time Wage Present: ${hasPartTime}`);

let workedDays = dailyWages.filter(wage => wage > 0).length;
console.log(`Total Days Employee Worked: ${workedDays}`);

