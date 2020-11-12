// function fun(gen) {
// 返回1号位之后的数组 slice(1) ,生成器第一个next为启动，不会调用
//   var args = [].slice.call(arguments, 1),
//     it;
//   it = gen.apply(this, args);
//   return Promise()
//     .resolve()
//     .then(function handleNext(value) {
//       var next = it.next(value);
//       return (function handleResult(next) {
//         if (next.done) {
//           return next.value;
//         } else {
//           return Promise.resolve(next.value).then(handleNext, function hanleErr(
//             err
//           ) {
//             return Promise.resolve(it.throw(err)).then(handleResult);
//           });
//         }
//       })(next);
//     });
// }

// function a() {
//   var args = [].slice.call(arguments, 1);
//   console.log(args);
// }
// a("haha", 1, 2, 3, 4, 5); // log出[1, 2, 3, 4, 5]a('run', '-g', '-b'); // log出['-g', '-b']
// function* foo() {
//   var p1 =  fetch("http://jsonplaceholder.typicode.com/posts/1/comments").then(res=>console.log(res));
//   var p2 =  fetch("http://jsonplaceholder.typicode.com/posts/1");
//   console.log(p1)
//   var r1 = yield p1
//   var r2 = yield p2
//   console.log(r1,r2);
// }
// foo().next()

// const arr = [1, 2];
// const [a, b] = arr;
// console.log(a, b);

// var name = "cl",
//   age = 22;
// var obj = {
//   name: "xx",
//   objAge: this.age,
//   myFun(from, to) {
//     console.log(from, to);
//     console.log(this.name + "年龄" + this.age, "来自" + from + "去" + to);
//   },
// };

// var db = {
//   myFun(from, to) {
//     console.log(from, to);
//     console.log(this.name + "年龄" + this.age, "来自" + from + "去" + to);
//   },
//   length: 1,
// }; // obj.myFun.call(db,'上海','安徽')
// obj.myFun.apply(db,['上海','安徽'])
// obj.myFun.bind(db,'上海','安徽')

// function* foo() {
//   console.log("inside *foo():", yield "B");
//   console.log("inside *foo():", yield "C");
//   return "D";
// }

// function* bar() {
//   console.log("inside *bar():", yield "A");
//   console.log("inside *bar():", yield* foo());
//   console.log("inside *bar():", yield "E");
//   return "F";
// }
// var it = bar();
// console.log("outside:", it.next().value);
// console.log("outside:", it.next(1).value);
// console.log("outside:",it.next(2).value);
// console.log("outside:",it.next(3).value);
// console.log("outside:",it.next(4).value);

// function* bar() {
//   console.log("inside *bar():", yield "A");
//   console.log("inside *bar():", yield* ["B", "C", "D"]);
//   console.log("inside *bar():", yield "E");
//   return "F";
// }
// var it = bar();
// console.log("outside", it.next().value);
// console.log('"outside', it.next(1).value);
// console.log('"outside', it.next(2).value);
// console.log('"outside', it.next(3).value);
// console.log('"outside', it.next(4).value);
// console.log("outside:", it.next(5).value);

// function* foo(val) {
//   if (val > 1) {
//     // 生成器递归
//     val = yield* foo(val - 1);
//   }
//   return yield request("http://some.url/?v=" + val);
// }
// function* bar() {
//   var r1 = yield* foo(3);
//   console.log(r1);
// }
// run(bar);

// thunk:用于调用另外一个函数的函数，无任何参数
// function foo(x, y) {
//   return x + y;
// }
// function fooThunk() {
//   return foo(3, 4);
// }
// console.log(fooThunk());

function foo(x, y, cb) {
  setTimeout(() => {
    cb(x + y);
  }, 1000);
}
// function fooThunk(cb){
//     foo(3,4,cb)
// }
// fooThunk((sum)=>console.log(sum))

// function thunkify(fn) {
//   var args = [].slice.call(arguments, 1);
//   console.log(args)//[3,4]
//   return function (cb) {
//     args.push(cb);
//     return fn.apply(null, args);
//   };
// }2
// var fooThunk = thunkify(foo,3,4)
// fooThunk((sum)=>console.log(sum))

// function* foo(url) {
//   try {
//     console.log("requesting", url);
//     var val = yield request(url);
//     console.log(val);
//   } catch (error) {
//     console.log("Oops", err);
//     return false;
//   }
// }
// var it = foo("https://xxx.com");

function *foo() {
  try {
    console.log("requesting", url);
    var TMP1 = request(url);
    var val = yield TMP1;
    console.log(val);
  } catch (err) {
    console.log("Oops", err);
    return false;
  }
}
foo().next()
foo().next()