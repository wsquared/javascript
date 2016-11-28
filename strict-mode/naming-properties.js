'use strict';

// Duplicate property names will be a syntax error.

var foo = { bar: 'Hello', bar: 'World' };

console.log(foo); // The last one wins

