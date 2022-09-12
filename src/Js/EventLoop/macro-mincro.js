// import $ from  'jquery'
// 宏任务和微任务区别

// 宏任务： DOM渲染后触发，如setTimeout
// 微任务: DOM渲染前触发，如Promise
const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#container')
    .append($p1)
    .append($p2)
    .append($p3)

Promise.resolve().then(() => {
    console.log('length1', $('#container').children().length)
    alert('promise then') // dom没有渲染
})

setTimeout(() => {
    console.log('length2', $('#container').children().length)
    alert('setTimeout') // dom渲染了
})

new Promise((resolve)=> {
    resolve(Promise.resolve(5))
    console.log(4)
    resolve(Promise.resolve(5))
}).then(res => {
    console.log('res', res)
})

// async function fn1() {
//     console.log(1) // 1
//     await fn2()
//     console.log(2) //4
// }
//
// async function fn2() {
//     console.log('fn2') //2
// }
// fn1()
// console.log(3) //3
//
//
//
// console.log('script start');
//
// setTimeout(function() {
//     console.log('setTimeout1');
//     Promise.resolve().then(function() {
//     }).then(function() {
//         console.log('promise5');
//         setTimeout(function() {
//             console.log('setTimeout3');
//         }, 0);
//     });
// }, 0);
//
// Promise.resolve().then(function() {
//     console.log('promise1');
// }).then(function() {
//     console.log('promise2');
//     Promise.resolve().then(function() {
//         console.log('promise3');
//     }).then(function() {
//         console.log('promise4');
//         setTimeout(function() {
//             console.log('setTimeout2');
//         }, 0);
//     });
// });
// console.log('script end');