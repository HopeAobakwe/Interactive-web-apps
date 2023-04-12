const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	'access id': '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		'postal-code': leoPostal,
	}
};

const sarah = {
	name: `${sarahName.trim()} ${sarahSurname}`,
	age: 62,
	'access id':'6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		'postal-code': sarahPostal
	}
};  

console.log(leo, leo.address['postal-code']);
console.log(sarah, sarah.address['postal-code']);

//Added semicolons to the end of each variable declaration
//Added colons to separate keys and values in object literals
//Added quotation marks around the postal-code property name in object literals
//Added spaces to concatenate the name and surname strings with a space in between
//Added a closing curly brace to each object literal
//Accessed the postal-code property correctly using bracket notation with quotes around the property name, since it contains a hyphen.