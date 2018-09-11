'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

//Code

function jadenCase(x){
	return x.split('').map((v,i,t)=>i==0||t[i-1]===' '?v.toUpperCase():v).join('');
}


//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
