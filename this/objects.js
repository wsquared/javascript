var obj = {
  foo: 'Hello World!',
  print: function() { console.log (this.foo) }
};

var obj2 = {
  foo: 'What\'s up?'
}

obj2.print = obj.print;

obj.print();

var print = obj.print;

print(); // Undefined. Refers to nothing.

var print = obj.print.bind(obj2);

print(); // What's up?
