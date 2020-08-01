// var a =1
// function foo (){
//     !(function bar (){
//         console.log(a)
//        })()
// }
// foo()

// function foo() {
//   var a = 2
//   function baz (){
//       console.log(a)
//   }
//   bar(baz)
// }
// function bar(fn){
//     fn()
// }
// foo()

// for (let  i = 0; i <= 5; i++) {
//     console.log(i,'====')

//     setTimeout(() => {
//         console.log(i )
//     }, i *1000);
//    }
const arr = [1, 2, 3]
let arr2 = arr.join(4)
console.log(arr2)
