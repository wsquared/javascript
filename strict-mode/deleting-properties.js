'use strict';

// Attempt to delete undeletable properties throws a Type Error.

var foo = { bar: 'Hello World!' };

console.log(foo);

delete foo.bar; // Ok

console.log(foo);

delete Object.prototype; // throws a TypeError
