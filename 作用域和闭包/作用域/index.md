# 作用域

- 引擎：从头到尾负责整个 js 程序的编译以及执行过程
- 编译器：负责语法分析及代码生成
- 作用域： 负责收集并且维护由所有声明的标识符（变量）组成的一系列查询，并实施一套严格的规则，确定当前执行的代码对这些标识符的访问权限

```
 var a = 2
```

上述声明会这样处理

1.编译器首先会将 var a = 2 分解成词法单元，然后将词法单元解析成一个树形结构。 2.当编译器进行代码生成时，会进行如下处理： + 遇到 var a, 编译器会询问作用域是否已经有一个该名称的变量存在同一作用域的集合中。如果是，则忽略该声明，继续编译。否则它会要求作用域在当前作用域集合中声明一个新变量并命名为 a + 编译器会为引擎生成运行时所需的代码，这些代码用来处理 a=2 这个赋值操作。引擎会先问作用域，当前作用域集合是否已存在变量 a，若存在，则引擎就使用该变量 a，否则引擎会继续向上级查找。

编译器在生成代码，引擎执行时，会通过查找变量 a 判断它是否已经声明过。查找的过程中作用域进行了协助。

- LHS：可理解为赋值
- RHS：可理解为引用

```
function foo(a){
    console.log(a)
}
foo(2)
```

这里 foo(2)是 LHS 查询，这里进行了赋值；
console.log(a) 这里是对 a 的引用也就是 RHS 查询

## 作用域嵌套

遍历嵌套作用域链的规则：引擎从当前的执行作用域开始查找变量，如果找不到就像上一级继续查找。当抵达最外层的全局作用域时，无论是否找到都会停止查找。（当前作用域类似于大楼的第一层，全局作用域相当于大楼的顶层）

## 异常

- 如果 RHS 查询在所用嵌套作用域中都遍寻不到所需变量，引擎就会抛出一个 ReferenceError 异常。
- 而如果 LHS 查询在所用嵌套作用域中都遍寻不到所需变量，全局作用域中就会创建一个具有该名称的变量，并将其返回给引擎（非严格模式下）

## 总结

- 作用域就是一套规则，用于确定在何处以及如何查找变量(标识符)
- 如果查找的目的是进行赋值，则会使用 LHS 查询；如果目的是引用（获取变量的值），会使用 RHS 查找。
- =操作符或调用函数传入的参数的操作都会导致关联作用域的赋值操作(LHS 查询)

- JS 代码会在执行前对其进行编译，像 var a = 2 这样的声明被分为 2 个独立的步骤

  - 首先，var a 在其作用域中声明新变量。这会在最开始的阶段，也就是代码执行前进行

  - a =2 会查询(LHS)变量 a 并对其进行赋值
