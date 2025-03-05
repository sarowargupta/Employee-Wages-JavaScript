const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;

const getWorkHours = () => {
    let workType = Math.floor(Math.random() * 3);
    return workType === 1 ? PART_TIME_HOURS : workType === 2 ? FULL_TIME_HOURS : 0;
};

let empWageArray = [];
let totalWorkingHours = 0;
let totalWorkingDays = 0;

while (totalWorkingDays < MAX_WORKING_DAYS && totalWorkingHours + FULL_TIME_HOURS <= MAX_WORKING_HOURS) {
    totalWorkingDays++;
    let workHours = getWorkHours();
    totalWorkingHours += workHours;
    empWageArray.push({
        day: totalWorkingDays,
        hoursWorked: workHours,
        dailyWage: workHours * WAGE_PER_HOUR
    });
}

const totalWage = empWageArray.reduce((total, emp) => total + emp.dailyWage, 0);
console.log(`Total Wage: $${totalWage}`);

const dailyWageMap = empWageArray.map(emp => `Day ${emp.day}: $${emp.dailyWage}`);
console.log("Daily Wage Map:", dailyWageMap);

const fullTimeDays = empWageArray.filter(emp => emp.dailyWage === 160).map(emp => `Day ${emp.day}`);
console.log("Full Time Wage Days:", fullTimeDays);

const firstFullTimeDay = empWageArray.find(emp => emp.dailyWage === 160);
console.log(`First Full Time Wage Earned on: Day ${firstFullTimeDay?.day || "N/A"}`);

const allFullTime = empWageArray.every(emp => emp.dailyWage === 160);
console.log("Every Day Full Time Wage:", allFullTime);

const anyPartTime = empWageArray.some(emp => emp.dailyWage === 80);
console.log("Any Part Time Wage Found:", anyPartTime);

const daysWorked = empWageArray.filter(emp => emp.hoursWorked > 0).length;
console.log("Total Days Employee Worked:", daysWorked);









