// function Foo() {}
// var a1 = new Foo()
// console.log(a1)

var Foo = {}
var a1 = Object.create(Foo)
console.log(a1)

Object.defineProperty(Foo, 'constructor', {
  enumerable: false,
  value: function Gotcha() {}
})
console.log(a1)
