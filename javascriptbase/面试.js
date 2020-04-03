// 1.call和apply的区别是什么，哪个性能更好一些？
// 相同点：改变this指向；
// 不同点：参数不同 fn.call(obj,arg1,arg2,arg3,...);
//     fn.apply(obj,[arg1,arg2,...]);
//     性能方面，call的性能要优于apply，特别是参数大于3个的时候；
//     代码演示：
let arr = [10, 20, 30],
    obj = {};
function fn1() { console.log('普通函数this指向：' + this) };
fn1();//WINDOW
fn1.call(obj, ...arr);//基于ES6的展开运算符 THIS指向obj
fn1.apply(obj, arr);//THIS指向obj
console.log('+++++++++++');
// 2.实现(5).add(3).minus(2) = 6;
(function () {
    function add(n) {
        return isNaN(n) ? this : this + n;
    }
    function minus(n) {
        return isNaN(n) ? this : this - n;
    }

    Number.prototype.add = add;
    Number.prototype.minus = minus;
})()

console.log('(5).add(3).minus(2) = ' + (5).add(3).minus(2))
console.log('+++++++++++');
// 3.箭头函数和普通函数的区别是什么？构造函数（function）可以使用new生成实例，那么箭头函数可以吗？为什么？
// 区别：
// 1.箭头函数语法上比普通函数简洁
// 2.箭头函数没有THIS，函数内部的THIS继承自函数所处上下文中的THIS,使用（apply/call）无法改变THIS指向；
// 3.箭头函数没有arguments，只能基于...ARG获取传递的参数合集
// 4.箭头函数不能被new执行（箭头函数没有this，也没有prototype）
// 代码演示
let fn2 = () => { console.log('箭头函数this指向：' + this) };
fn2();//WINDOW
fn1.call(obj); //指向obj
fn2.call(obj); //指向WINDOW

document.body.onclick = function () {
    console.log(this);//BODY
    // arr.sort(function (a, b) {
    //     console.log(this);//WINDOW 回调函数中的THIS一般指向WINDOW
    //     return a - b;
    // })
    arr.sort((a, b) => { //通过箭头函数修改THIS指向
        console.log(this);//BODY
        return a - b;
    })
}
document.body.onclick = () => {
    console.log(this);//WINDOW
}

function each(_arr, callback) {
    for (let i = 0; i < _arr.length; i++) {
        // callback( i, _arr[i]);
        callback.call(_arr, i, _arr[i]);
    }
}
//回调函数callback THIS一般指向WINDOW，可以通过apply/call修改THIS指向，可传值；
each(arr, function (index, item) { /*console.log(`回调函数${this},${index}:${item}`)*/ })
// let fn3 = () => {
//     console.log(arguments)
// }
// fn3(); //ARGUMENTS is not defined
let fn3 = (...arguments) => {
    console.log(arguments);
}
fn3(); //ARGUMENTS is not defined
let fn4 = function () {
    console.log(arguments)
}
fn4();
console.log('++++++++++');
// 如何把一个字符串的大小写取反？
let mixString = 'abC';
console.log((mixString).toLocaleUpperCase());
console.log((mixString).toLocaleLowerCase());
// A:65 Z:90
mixString = mixString.replace(/[a-zA-Z]/g, (match) => {
    return match.charCodeAt() >= 65 && match.charCodeAt() <= 90 ? match.toLocaleLowerCase() : match.toLocaleUpperCase()
});
console.log(mixString);
console.log('+++++++++++++++++++++++')