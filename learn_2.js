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