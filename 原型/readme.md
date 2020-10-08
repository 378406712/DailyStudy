## Prototype

+ js对象中一个特殊的prototype内置属性，是对其他对象的引用，
+ 几何所有的对象在创建时prototype属性都会被赋予一个非空的值
+ 所有普通的prototype链最终都会指向内置的Object.prototype

## 构造函数
+ 函数不是构造函数，但是当且仅当使用new时，函数调用会变成"构造函数调用"
