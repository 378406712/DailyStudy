# 对象

## 语法

- 对象创建形式

  - 字面量创建/构造形式创建
  - 区别：字面量声明可以添加多个键值对，而构造形式必须手动逐个添加属性。

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

## 属性和方法
+ 