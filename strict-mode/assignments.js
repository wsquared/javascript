'use strict';

// Assignments which would otherwise silently fail throw an exception.

var foo = {};

Object.defineProperty(foo, 'bar', { value: 'Hello World!', writable: false });

foo.bar = 'Hello friends!'; // This is not allowed in strict mode.
