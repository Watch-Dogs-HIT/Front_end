"use strict";

// 数据类型,函数,oop

// 数字

// 字符串 ' " `

function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // 多行文本

let str = "test";
console.log(str.length); // 长度
console.log(str[2]); // 下表索引
console.log(str.indexOf("t")); // 查找
console.log(str.lastIndexOf("t")); // 从右查找
// 字符串不可变
// 在 JavaScript 中，字符串不可更改。改变字符是不可能的。\
// 通常的解决方法是创建一个新的字符串，并将其分配给 str 而不是以前的字符串。

// 获取子字符串
// JavaScript 中有三种获取字符串的方法：substring、substr 和 slice。

// unicode https://zh.javascript.info/string#nei-bu-unicode

// 数组
let fruits = ["Apple", "Orange", "Plum"];
fruits[2] = 'Pear'; // 现在变成 ["Apple", "Orange", "Pear"]
// 后端操作 pop/push,
// 前部操作 shift/unshift
// 迭代数组元素
for (let fruit in fruits) { // for (let fruit of fruits) of 也行
    alert(fruit);
}

// 切片 splice
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert(arr); // ["I", "JavaScript"]

// 查找
// indexOf/lastIndexOf 和 includes

// Map、
let map = new Map();

map.set('1', 'str1');   // 字符串作为 key
map.set(1, 'num1');     // 数字作为 key
map.set(true, 'bool1'); // 布尔值作为 key
// 还记得普通对象 Object 吗？它将会吧所有的键转化为字符串类型
// 但是 Map 将会保留键的类型，所以下面这两个是不同的：
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.size); // 3

// 甚至把object作为key
let john = {name: "John"};
// 存下每个用户的来访次数
let visitsCountMap = new Map();
// john 是 map 的键
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john)); // 123

// map.keys() – 返回键的迭代器，
// map.values() – 返回值的迭代器，
// map.entries() – 返回 [key, value] 迭代器入口，for..of 循环会默认使用它。
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// 迭代键（vegetables）
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// 迭代值（amounts）
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// 迭代键值对 [key, value]
for (let entry of recipeMap) { // 和 recipeMap.entries() 一样
    alert(entry); // cucumber,500（等等）
}

// Set
// Set 是一个值的集合，这个集合中所有的值仅出现一次。
//
// 主要方法包括：
//
// new Set(iterable) – 创建 set，利用数组来创建是可选的（任何可迭代对象都可以）。
// set.add(value) – 添加值，返回 set 自身。
// set.delete(value) – 删除值，如果该 value 在调用方法的时候存在则返回 true ，否则返回 false。
// set.has(value) – 如果 set 中存在该值则返回 true ，否则返回 false。
// set.clear() – 清空 set。
// set.size – 元素个数。
// WeakMap 和
// WeakSet
// WeakSet 是一种特殊的 Set，它不会阻止 JavaScript 将它的元素从内存中移除。WeakMap 和 Map 的区别也和上述一样。
// Map —— 是一个键值对集合
//
// 和普通 Object 的区别：
//
// 对象可以作为键。
// 迭代顺序是插入顺序。
// 附加方便的方法，有 size 属性。
// Set —— 是一个包含不重复值的集合。
//
// 和 array 不同，set 不允许元素重新排序。
// 保持插入的顺序。
// WeakMap —— Map 的一个变体，仅允许对象作为键，并且当对象由于其他原因不可引用的时候将其删除。
//
// 它不支持整体的操作：没有 size 属性，没有 clear() 方法，没有迭代器。
// WeakSet —— 是 Set 的一个变体，仅存储对象，并且当对象由于其他原因不可引用的时候将其删除。
//
// 同样不支持 size/clear() 和迭代器。

// 数组解构
// 以下是将数组解构到变量中的一个例子：

// 有一个存放了名字和姓氏的数组
let arr1 = ["Ilya", "Kantor"];
// 解构赋值
let [firstName, surname] = arr1;
alert(firstName); // Ilya
alert(surname);  // Kantor
// ...
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// date
// https://zh.javascript.info/date

// json
// JavaScript 提供方法：
// JSON.stringify 将对象转换为 JSON。
// JSON.parse 将 JSON 转换回对象。
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/