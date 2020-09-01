console.log(typeof null) // 'object

var myArray = [1, 2, 3]
myArray.baz = 'baz'
console.log(myArray)

var myObj = {
  a: 1
}

Object.defineProperty(myObj, 'a', {
  value: 4,
  writable: true,
  configurable: false,
  enumerable: true
})
console.log(myObj.a) // 4
Object.defineProperty(myObj, 'a', {
  value: 6,
  writable: false,
  configurable: false,
  enumerable: true
}) // Cannot redefine property: a
console.log(myObj.a) // 6

var obj = {
  a: 2
}
Object.preventExtensions(obj)
obj.b = 4
console.log(obj.b) //undefined

var obje = {
  a: 1
}
Object.seal(obje)
// Object.defineProperty(obje, 'a', {
//   writable: false,
//   value: 2,
//   configurable: true,
//   enumerable: false
// })

var objec = {a:2}
Object.freeze(objec)
objec.a =3
console.log(objec.a) //2

var uObj = {
  a:2
}

console.log("a" in uObj) // true
console.log("b" in uObj) // false

console.log(uObj.hasOwnProperty('a'))// true
console.log(uObj.hasOwnProperty('b'))// false

console.log(4 in [2,4,5])// false

for (item in [1,2,3]){
  console.log(item) // 0 1 2
}
for (key of [1,2,3]){
  console.log(key) // 1 2 3 
}