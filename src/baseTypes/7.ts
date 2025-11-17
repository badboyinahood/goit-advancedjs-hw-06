/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

// TEST
console.log("Is Saturday weekend?", isWeekend(WeekDays.Saturday)); // true
console.log("Is Tuesday weekend?", isWeekend(WeekDays.Tuesday));   // false

export {};
