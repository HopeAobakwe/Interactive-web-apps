const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line

const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);
const leo = `${leoName} ${leoSurname} Owed R${parseFloat(sarahBalance).toFixed(2)}`;
const sarah = `${sarahName} ${sarahSurname} Owed R${parseFloat(leoBalance).toFixed(2)}`;
const total = "Total amount owed: ";
const result = `

${leo}
${sarah}

${divider}
  ${total}R${Math.abs(owed).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
${divider}`;

console.log(result);