// function identify(){
//     return this.name.toUpperCase()
// }

// function speak(){
//     var geeeting = 'Hello JS' + identify.call(this)
//     console.log(geeeting)
// }
// var me = {
//     name:'liu'
// }
// var you = {
//     name:'xuan'
// }
// console.log(identify.call(me))
// console.log(identify.call(you))

// speak.call(me)
// speak.call(you)

// function foo(num) {
//   console.log('foo: ' + num)
//   console.log(this) // 指向window
//  this.count++
// }
// foo.count =0

// for (var i = 0; i < 10; i++) {
//     if(i>5) foo(i)
// }
// console.log(data.count) // 0

// function foo(num) {
//     console.log('foo: ' + num)
//    data.count++
//   }
//  var  data={count:0}
//   for (var i = 0; i < 10; i++) {
//       if(i>5) foo(i)
//   }
//   console.log(data.count) //4

// function foo(num) {
//   console.log('foo: ' + num)
//   foo.count++
// }
// foo.count = 0
// for(var i=0;i<10;i++){
//     if(i>5) foo(i)
// }
// console.log(foo.count) // 4


// function foo(num) {
//     console.log('foo: ' + num)
//     this.count++
//   }
//   foo.count = 0
//   for(var i=0;i<10;i++){
//       if(i>5) foo.call(foo,i)
//   }
//   console.log(foo.count) // 4

// function foo (){
//     var a = 2
//     bar()
// }
// function bar(){
//     console.log(123)
// }
// foo()
class Foo{
    constructor(){
        this.a =1
    }
}
var foo = new Foo
console.log(foo.a)