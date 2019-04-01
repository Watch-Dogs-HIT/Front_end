"use strict";

//文档对象模型（DOM）
alert(window.innerHeight); // inner window height
// change the background color to red
document.body.style.background = "red";
// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
alert(location.href); // shows current URL
if (confirm("Go to wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirect the browser to another URL
}

// 遍历 DOM
// DOM 让我们可以对元素和它们其中的内容做任何事，但是首先我们需要获取到对应的 DOM 对象，把这个对象赋予一个变量，然后我们才能修改这个对象。
// DOM 集合是只读的
// DOM 集合是实时的
// 不要使用 for..in 来循环遍历集合
// 在使用 for..of 的情况下集合是可迭代的。但是有时候人们会尝试使用 for..in 来迭代集合。
// 请不要这么做。for..in 循环遍历的是所有列举的属性。集合会有一些“额外”很少用到的属性，这些属性我们通常不会获取到：
// 显示 0、1、length、item、values 以及其它值。
// for (let prop in document.body.childNodes) alert(prop);

// 操作html表
// <table id="table">
//     <tr>
//     <td>one</td><td>two</td>
// </tr>
// <tr>
// <td>three</td><td>four</td>
// </tr>
// </table>
//
// <script>
// // 获取第一行中第二个单元格的内容
// alert( table.rows[0].cells[1].innerHTML ) // "two"
// </script>