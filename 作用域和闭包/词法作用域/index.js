// function foo(str, a) {
//   eval(str)

//   console.log(a, b)
// }
// var b = 4

// foo("var b =1", 2)

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// with (obj) {
//   ;(a = 4), (b = 5), (c = 6)
// }
// console.log(obj.a)

// function foo(obj) {
//   with (obj) {
//     a = 2
//   }
// }

// var o1 = { a: 3 }
// var o2 = { b: 3 }
// foo(o1)

// console.log(o1.a)

// foo(o2)
// console.log(a + '泄漏')

// console.log(o2.a)
// console.log(a)

// var a = 2
// console.log(window.a)

// function foo(str,a){
//   eval(str) // 进行了词法欺骗，相当于插入了 var b = 3 代码段
//   console.log(a,b)
// }
// var b =2
// foo ('var b =3' ,1) //1 ,3
var obj = {
  a: 1,
  b: 2,
  c: 3
}
with (obj) {
  ;(a = 4), (b = 5), (c = 6)
}
console.log(obj.a)