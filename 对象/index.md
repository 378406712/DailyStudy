# 对象

## 语法

- 对象创建形式

  - 字面量创建/构造形式创建
  - 区别：字面量声明可以添加多个l键值对，而构造形式必须手动逐个添加属性。

- 类型
  - 简单类型：string,number,boolean,null,undefined
  - 复杂(引用)类型: object
  - es6 新增 symbol
  - **null 有时会被当做一种对象类型，其实是 js 的一个 bug，即对 null 执行 typeof null 会返回字符串'object'，原因是不同的对象在底层都表示二进制，在 js 中二进制前三位都为 0 的会被判断为 object 类型，null 的二进制全是 0，自然前三位也是 0，所以执行 typeof 是返回'object'**

## 内置对象

- String,Number,Boolean,Onject,Function,Array,Date,RegExp,Error
- 这些内置对象从表现形式来说很像其他语言中的类型(type)或者类(class).这些内置函数可以当做构造函数(new 调用)来使用，从而可以构造一个对应子类型的新对象.

## 内容

- 对象的内容时由一些存储在特定命名位置的（任意类型）的值组成的，称之为属性
- 存储在对象容器内部的是这些属性的名称，它们就像指针(技术角度看就是引用)一样，指向这些值真正的存储位置
```
var myObj ={
  a:2
}
myObj.a // 2
myObj[a] //2
```
+ 可以用.操作符或者[]操作符访问.
+ .操作符被称为"属性访问",["a"]被称为键访问.
+ 实际上它们访问的是同一个位置，并且会返回相同的值
+ 区别：.操作符要求属性名满足标识符的命名规范,而[".."]语法可以接受任意UTF-8/Unicode字符串作为属性名.
+ 在对象中，属性名永远都是字符串

## 可计算属性名
+ 如可以使用myObj[prefix+name]
+ ES6增加了可计算属性名，可以在文字形式中使用[]包裹一个表达式来当做属性名.
```
var prefix = 'foo'
var myObj = {
  [prefix+"bar"] : 'hello',
  [prefix+'baz'] : 'world'
}
myObj['foobar'] // hello
myObj['foobaz'] // world

```

## 不变性
+ 结合writeable:false,configurable:false可以创建一个真正的常量属性(不可修改，删除，重定义)
+ 禁止扩展：使用Object.preventExtensions(..)
```
Object.preventExtensions(obj)
obj.b=4 
console.log(obj.b) //undefined
```
+ 密封:Object.seal(..)创建一个密封对象，这个方法实际上会在一个现有对象上调用Object.preventExtensions(..)并把所有现有属性标记为configurable:false
+ 冻结:Object.freeze(..):创建一个冻结对象，调用Object.seal(..),并把所有"数据访问"属性标记为writeable:false,即无法配置也不可写.
```
var objec = {a:2}
Object.freeze(objec)
objec.a =3
console.log(objec.a) //2
```

## 存在性
```
var uObj = {
  a:2
}

console.log("a" in uObj) // true
console.log("b" in uObj) // false
console.log(uObj.hasOwnProperty('a'))// true
console.log(uObj.hasOwnProperty('b'))// false
```

+ in 操作符会检出属性是否在对象及其Prototype原型链中
+ hasOwnProperty(..)只会检查属性是否在uObj对象中，不会检查原型链。
+ in操作符检查的是属性名

### 枚举
+ 相当于可以出现在对象属性的遍历中
+ Object.keys(..)和Object.getOwnPropertyNames(..)都只会查找对象直接包含的属性.

## 遍历
+ ES5增加了一些数组的辅助迭代器，包括forEach(..),every(..)和some(..),
+ forEach会遍历数组中的所有值并忽略回调函数的返回值。
+ every会一直运行直到回到函数返回false
+ some会一直运行到回调函数返回true
+ every和some中特殊的返回值和普通for循环中的break语句类似，会提前终止遍历
+ 使用for...in遍历对象是无法直接获取属性值的，实际上遍历的是对象中所有可枚举属性，需要手动获取属性值。

```
for (item in [1,2,3]){
  console.log(item) // 0 1 2
}
for (key of [1,2,3]){
  console.log(key) // 1 2 3 
}
```
+ ES6的for...of循环语法，直接遍历值而不是下标
+ for..of 循环首先会向北访问对象请求一个迭代器对象，然后通过调用迭代器对象的next()方法来遍历所有返回值
+ 数组有内置的@@iterator ，因此for..of可以直接应用在数组上
 

