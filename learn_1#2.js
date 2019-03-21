"use strict";

// 数据结构-对象 object
// 创建
let user1 = new Object(); // “构造函数” 的语法
let user2 = {};  // “字面量” 的语法
let user3 = {     // 一个对象 √
    name: "John",   // 键 "name"，值 "John"
    age: 30,        // 键 "age"，值 30

};// 注意 key不用加""

// 读取
console.log(user3["name"]);

// 删除
delete user3.age;

// 查询
console.log("name" in user3);

// 遍历
for (let k in user3) {
    console.log(user3[k]);
}

// object是引用复制
// == 比较两个元素的值
// === 比较两个元素的地址?id?(类似于python的is)

// 合并
Object.assign(user3, user2, user1);

// JS垃圾回收
// 标记清除 + 弱代假说

// Symbol 类型
// “Symbol” 值表示唯一的标识符。
let id = Symbol();
// Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个不影响任何东西的标签。
// Symbol 有两个主要的使用场景：
// “隐藏” object 属性。如果需要将属性添加到 “属于” 另一个脚本或库的对象中，则可以创建 Symbol 并将其用作属性键。
// Symbol 属性不出现在 for..in中，因此不回偶尔列出。另外，它不会被直接访问，因为另一个脚本没有我们的符号，所以它不会偶尔干预它的操作。
// 因此我们可以使用 Symbol 属性“秘密地”将一些东西隐藏到我们需要的 object 中，但其他人不应该看到。
// JavaScript 使用了许多系统 Symbol，这些 Symbol 可以作为 Symbol.* 访问。我们可以使用它们来改变一些内置行为。
// 例如，在本教程的后面部分，我们将使用 Symbol.iterator 来迭代，Symbol.toPrimitive 来设置对象原始值的转换等等。


// 可以使得多个文件同名资源不冲突
// 添加到object中
let id1 = Symbol("id");
let user4 = {
    name: "John",
    [id]: 123 // 不仅仅是 "id：123",必须要用[]
};

// 对象方法与 "this"
// 就是绑定方法到对象后,是对象访问object内的资源~类似python的self(?)
let user6 = {
    name: "John4",
    age: 30,

    sayHi() {
        console.log(this.name);
    }

};

user6.sayHi(); // John4
// 总结
// 存储在对象中函数称之为『方法』。
// 对象执行方法进行『操作』，比如 object.doSomething()。
// 方法可以将该对象引用为 this。
// this 的值是在运行时求值的。
//
// 函数声明使用的 this 只有等到调用时才会有值。
// 函数可以在对象之间进行共用。
// 当函数使用『方法』语法 object.method() 调用时，调用过程中的 this 总是指向 object。
// 请注意箭头函数有些特别：它们没有 this。在箭头函数内部访问的都是来自外部的 this 值。


// 对象原始值转换
// obj[Symbol.toPrimitive] = function(hint) {
//     // 返回一个原始值
//     // hint = "string"，"number" 和 "default" 中的一个
// }
let user7 = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) { // 类似于python中的 __str__ ,__add__ 这种方法来吧object转换为一个预期类型的数据
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// 转换演示：
console.log(user7); // hint: string -> {name: "John"}
console.log(+user7); // hint: number -> 1000
console.log(user7 + 500); // hint: default -> 1500

// 构造函数和操作符 "new"
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


// 双语法构造函数：new.target
// 在一个函数内部，我们可以使用 new.target 属性来检查它是用 new 还是不用它来调用。
// 常规调用为空，如果通过 new 调用，则等于函数：

function User() {
    alert(new.target);
}

// 不带 new：
User(); // undefined

// 带 new：
new User(); // function User { ... }

// 构造函数 Return
// 通常，构造函数没有 return 语句。他们的任务是将所有必要的东西写入 this，并自动转换。
// 但是，如果有 return 语句，那么规则很简单：
//
// 1. 如果 return 对象，则返回它，而不是 this。
// 2. 如果 return 一个原函数，则忽略。
// 换一种说法，带有对象的 return 返回该对象，在所有其他情况下返回 this。
// 例如，这里 return 通过返回一个对象覆盖 this：
function BigUser() {
    this.name = "John";
    return {name: "Godzilla"};  // <-- returns 一个 object
}

alert(new BigUser().name);  // 哇哦，得到了对象，name 属性值为 Godzilla ^^