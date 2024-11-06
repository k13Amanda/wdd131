  // for loop
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

  // while loop
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
    i++;
  }

  // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }

  

  function getDayNames(nextDays) {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    let result = [];

    for (let i = 0; i < nextDays; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const dayName = dayNames[futureDate.getDay()];
        result.push(dayName);
    }

    return result;
}

// Example usage:
const nextDays = 7; // Number of days to produce day names for
const dayNames = getDayNames(nextDays);
console.log(dayNames); // Outputs the names of the days for the next 7 days

