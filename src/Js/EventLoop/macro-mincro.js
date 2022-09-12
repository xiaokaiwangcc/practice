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