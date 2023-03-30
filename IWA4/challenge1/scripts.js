const date = 2050;
let Status = 'parent';
let count = 0;

if (date) {
	console.log('January', 'New Year’s Day')
	console.log('March', 'Human Rights Day')
	console.log('April', 'Family Day')
	console.log('April', 'Freedom Day')
	count += 4;

	if (Status === 'student') {
	  console.log('June', 'Youth Day')
	  count += 1;
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	console.log('December', 'Day of Reconciliation')
	count+= 3;
	if (Status === 'parent') {
	  console.log('December', 'Christmas Day')
		count += 1;
    }
    console.log('December', 'Day of Goodwill')
	count += 1;
}
console.log('Your status is:', Status)
console.log('The year is:', date)
console.log('The total holidays is:', count)