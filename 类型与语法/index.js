// console.log(typeof null ==='object')
// console.log(typeof function a (){} )
// function foo(a, b) {}
// console.log(foo.length)

// console.log(typeof 1)
// if (2 < 1) {
//   var a = 3
// }
// console.log(a)

// function bar() {
//   b = 3
// }
// bar()
// console.log(b)
// var a = [1, 2, 3]
// console.log(a.toString())
// console.log(JSON.stringify("42"))
// console.log(JSON.stringify(undefined))
// console.log(JSON.stringify(function () {}))
// console.log(JSON.stringify([1, undefined, function () {}]))
// console.log(JSON.stringify({ a: 2, b: function () {} }))

var o = {}
var a = {
  b: 2,
  c: o,
  d: function () {}
}
o.e = a
console.log(JSON.stringify(a))
