"use strict";
// 我们注意到 "use strict" 可以放在函数（大多数函数）而不是整个脚本的开头。那么严格模式仅在该函数中启用。
// 但通常人们会将它用于整个脚本。
// 请确保 "use strict" 出现在脚本的最顶部，否则严格模式可能无法启用。

// 全部内容总结 https://zh.javascript.info/javascript-specials


console.log(String("变量,赋值,数据类型,类型转换及操作符"));
// 变量
let message;
message = 'Hello'; // 保存字符串
let message2 = 'Hello!'; // 定义变量，并且赋值
let user = 'John', Aage = 25, message3 = 'Hello'; // 一次定义多个变量
// note : 使用let而不是var
// 在较旧的脚本中，你也可能发现另一个关键字 var，而不是 let:
// var message = 'Hello';
// var 关键字与 let 大体相同，也用来声明变量，但稍微有些不同，也有点“老派”。


// 数据类型
// 1, 数.字 2. "字符串"(没有字符) 3. true/false 4. null 5. undefined 6.
let t;
t = 1 / 0;
console.log(t); // 输出infinity但是不会报错

// ToString:String() // ToNumer:Number(),+var
let v1 = false, v2 = 3, v3 = null;
console.log(String(v1));
console.log(String(v2));
console.log(String(v3));

// 运算符号 + - * / += -= ** % > < ==

// 逗号运算符
// 逗号运算符 , 是最少见最不常使用的运算符之一。有时候它会被用来写更简短的代码，因此为了能够理解代码，我们需要了解它。
// 逗号运算符能让我们处理多个语句，使用 , 将它们分开。每个语句都运行了，但是只有最后的语句结果会被返回。
// 举个例子：
let a = (1 + 2, 3 + 4);
console.log(a); // 7 (3 + 4 的结果)

console.log(v1 += 1);//1
let v11 = v1 += 1;
console.log(v11);//2

// 类型比较
console.log(null === undefined); // false


console.log("交互 alert、prompt、confirm");
// alert 这个小窗口被称为 模态窗。“modal” 意味着用户不能与页面的其他部分进行交互，
// 点击其他按钮等，直到他们处理完窗口。在这种情况下 – 直到他们按下“确定”。

// prompt
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
// 用户在 prompt 对话框的 input 框输入文本并点击确定。不然就点击取消按钮或敲击 Esc 键来取消。
// prompt 返回输入的文本；如果取消输入就返回 null。

// confirm
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
// confirm 函数显示一个带有 question 和两个按钮的模态窗口：确定和取消。
// 点击确定返回 true，点击取消返回 false。

// 条件运算符
console.log("if else ?");
let userName = prompt("Who's there?", '');
if (userName == 'Admin') {
    let pass = prompt('Password?', '');
    if (pass == 'TheMaster') {
        alert('Welcome!');
    } else if (pass == '' || pass == null) { // js 用 || 和 && 同c一样
        alert('Canceled.');
    } else {
        alert('Wrong password');
    }
} else if (userName == '' || userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

// ? 表达式
let accessAllowed = (age > 18) ? true : false;

// 循环
let i = 0;
while (i <= 3) {
    console.log(i++);
}

for (let i = 0; i < 3; i++) { // 结果为 0、1、2  // 不会引发重定义问题
    console.log(i);
}


console.log("函数");
let un = 'John';
let m = "123";

function showMessage() {
    un = "Bob"; // (1) 改变外部变量
    let m = 'Hello, ' + un;
    console.log(m);
    return m;
}

showMessage();
console.log(un);
// 只有在没有本地变量的情况下才会使用外部变量。 **并且在函数内修改之后,也会作用于外面的变量**
// 如果在函数中声明了同名变量，那么它遮蔽外部变量。

// 函数表达式及箭头函数
let sayHi = function () {//函数表达式
    alert("Hello");
};
alert(sayHi);
let func = sayHi;
func();
sayHi();

// 回调函数
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

// 匿名函数
ask(
    "Do you agree?",
    function () {
        alert("You agreed.");
    },
    function () {
        alert("You canceled the execution.");
    }
);

// 函数声明 vs 函数表达式
// 1. 函数表达式在执行到达时创建并可用。
// 一旦执行到右侧分配 let sum = function…，才会创建并可以使用(复制，调用等)。(之前都是不可用的,而函数一旦声明,就可以在声明代码段之前调用)

// 箭头函数
let sum = (a, b) => a + b;