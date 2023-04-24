const data = {
    lists: [
        ['first', [15, 11, 13, 7, 5]],
        ['second', [2, 6, 8, 4, 14, 12, 10]],
        ['third', [9, 3, 1]],
    ]
}
// Only edit below
const  first =  data.lists[0][1] //fix the syntaxing and use array indexing to access arrays using data objects
const  second =  data.lists[1][1]
const  third = data.lists[2][1]
const result = []
const extractBiggest = () => { 
	/*extractBiggest function compares the last 
	element of each array using array indexing,
	 and returns the biggest element among them.*/
    if ( first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
        return first.pop()//use the Pop method to extract the last element from each array
    }
    if
    (second[second.length - 1] >= third[third.length - 1]) {
        return second.pop() // use the Pop method to extract the last element from each array
    }
    return third.pop()// use the Pop method to extract the last element from each array
}
/*the initial code has a bug in the 'extractBiggest' function where it tries to access
 the last element of an array using negative index (first[-1]), which is not 
 a valid way to access array elements in JavaScript. This will result in 
an undefined value. The third[-1] < 1 condition in 
the extractBiggest function also does not make sense, since it always returns false.*/

// Only edit above
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)