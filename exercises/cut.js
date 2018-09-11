'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

//Code

function cutFirst(x){
	x.splice(0, 2);
	return x;
}

function cutLast(x){
	x.splice(-2, 2);
	return x;
}

function cutFirstLast (x){
	return cutFirst(cutLast(x));
}


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
