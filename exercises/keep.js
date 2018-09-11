'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

//Code

function keepFirst(x){
	return x.splice(0, 2);
}

function keepLast(x){
	return x.splice(-2, 2);
}

function keepFirstLast(x){
	return x.splice(2, 2);
}


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
