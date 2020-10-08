// var anthorobject = {}
// Object.defineProperty(anthorobject, 'a', {
//   value: 2,
//   writable: false
// })
// var myobject = Object.create(anthorobject)
// Object.defineProperty(myobject, 'a', {
//   value: 4
// })
// console.log(myobject)

// function Foo() {
//   return 'foo'
// }
// var a = new Foo()
// console.log(a.__proto__ === Foo.prototype)

// function NothingSpecial() {
//   console.log('dont mind me')
// }
// var a = new NothingSpecial()
// console.log(a)

function Foo() {}
Foo.prototype = {}
var a1 = new Foo()
console.log(Foo.prototype.constructor === Foo)
console.log(a1.constructor === Object)
