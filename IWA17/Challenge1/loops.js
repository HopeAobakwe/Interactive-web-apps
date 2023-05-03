// scripts.js
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/*This line defines a function getDaysInMonth which takes in a date
 and returns the number of days in the month of that date.*/
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
const createArray = (length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
};
/*This line defines a function createArray that takes in a length parameter 
and returns an array of length length containing the numbers from 0 to length - 1.*/
const createData = function(){
    const current = new Date();
    current.setDate(1);
    const startDay = current.getDay();
    const daysInMonth = getDaysInMonth(current);
    const weeks = createArray(6);
    const days = createArray(7);
     let result = [] //value = null
    for (let weekIndex = 0; weekIndex < weeks.length; weekIndex++) {
        let value = {
            week: weekIndex + 1,
            days: []
        };
        for (let dayIndex = 0; dayIndex < days.length; dayIndex++) {
            const day = (weekIndex * 7) + dayIndex - startDay + 1;
            const isValid = day > 0 && day <= daysInMonth;
            let classString = 'table__cell';
            if (dayIndex === 0 || dayIndex === 6) {
                classString += 'table__cell_weekend';
            }
             value.days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
                class: classString,
             });
            }
            weeks[weekIndex] = value;
        }
        return weeks;
};

/*his function createData initializes a variable current to the current date, 
sets the day of the month to 1, and 
then calculates the starting day of the week for that month using getDay(). 
It also calculates the total number of days in the month using getDaysInMonth. 
Then, it initializes arrays weeks and days using the createArray function.
 A new variable value is initialized and is pushed onto the days array, 
 which contains an object dayOfWeek with the current day of the week,
  a value representing the current day of the month, and
  a class representing the CSS classes to apply to the table cell. 
  The resulting value object is pushed onto the days array. 
  This process is repeated for each week and the resulting weeks array is returned.*/
const addCell = function(existing, classString, value) {
    return `${existing}<td class="${classString}">${value}</td>`;
};

/*This function addCell takes in a string existing, a CSS class classString, 
and a value, and returns an HTML table cell containing the given value 
and classString.*/
const createHtml = function(data) {//defines a function called createHtml that takes one parameter, data. 
    let result = ''; //initializes a variable called result using an empty string
    for (let i = 0; i < data.length; i++) {
      const week = data[i];
      let inner = '';
      /*begins a loop that iterates over each item in the data array. 
      Each item in the array represents a week in the schedule. For each week,
       a new variable called inner is initialized with an empty string.*/
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);
      for (let j = 0; j < week.days.length; j++) {
        const day = week.days[j];
        let classString = 'table__cell';
        const currentDate = new Date();
        const isToday = currentDate.getDate() === day.value && currentDate.getMonth() === currentDate.getMonth();
        const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
        const isAlternate = week.week % 2 === 0;
        if (isToday) {
          classString = `${classString} table__cell_today`;
        }
        if (isWeekend) {
          classString = `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          classString = `${classString} table__cell_alternate`;
        }
       /* This loop iterates over each day in the current week and generates an HTML table cell for each day. 
       For each day, several variables are initialized and computed, 
       including classString (a string of CSS classes to apply to the cell), currentDate (the current date and time),
        isToday (a boolean value that indicates whether the current day is today), 
        isWeekend (a boolean value that indicates whether the current day is a weekend day), 
        and isAlternate (a boolean value that indicates whether the current week is an even-numbered week).*/ 
        inner = addCell(inner, classString, day.value || '');
      }
      result += `<tr>${inner}</tr>`;//appends the HTML row for the current week (inner) to the result variable
    }
    return result;
  };
// Only edit above
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`
const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)