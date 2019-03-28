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