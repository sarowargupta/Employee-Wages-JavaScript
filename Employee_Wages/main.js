//UC-10
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

console.log("Work Log (Day-wise):", workLog);



