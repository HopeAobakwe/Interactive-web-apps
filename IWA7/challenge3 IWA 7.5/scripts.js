const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line
const owed = parseFloat(leoBalance) + parseFloat(sarahBalance)
const leo = `${leoName} ${leoSurname} (Owed: R ${parseFloat(sarahBalance).toLocaleString('en-ZA', {minimumFractionDigits: 2, maximumFractionDigits: 2})})`
const sarah = `${sarahName} ${sarahSurname} (Owed: R ${parseFloat(leoBalance).toLocaleString('en-ZA', {minimumFractionDigits: 2, maximumFractionDigits: 2})})`
const total = `  Total amount owed: R ${owed.toFixed(2).toLocaleString('en-ZA')}`
const result = `
${leo}
${sarah}

${divider}
${total}
${divider}`

console.log(result)


//ParseFloat because the characters are not intigers
//Convert leoBalance and sarahBalance from strings to numbers using parseFloat().
//Use template literals to properly format the leo and sarah variables.
//Use the .toFixed() method to format the owed variable to 2 decimal places and add the thousand separator using the .toLocaleString() method.
//Add line breaks and indentation to the result variable.
//thousand seperator- Used to format/configure a number with Commas