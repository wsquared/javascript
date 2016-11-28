// Example 1
(function () {
  console.log(foo); // Undefined.

  var foo = 10;

  function bar() {
    foo = 25;
  }

  bar();

  console.log(foo); // 25.
})();

// Example 2
(function () {
  console.log(foo); // Undefined.

  var foo = 10;

  function bar() {
    foo = 25;
    var foo;
  }

  bar();

  console.log(foo); // 25.
})();
