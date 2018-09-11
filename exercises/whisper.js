'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

function whisper(str){
	return '*' + str.toLowerCase() + '*';
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(whisper.length, 1)
assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('HELLO'), '*hello*'))
assert.deepStrictEqual(whisper('John Lennon'), '*john lennon'))
// End of tests */
