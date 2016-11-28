'use strict';

// Setting properties on primitive values are forbidden.

false.true = ''; // TypeError
(14).foo = 'bar'; // TypeError
'foo'.bar = 'hello world!'; // TypeError

