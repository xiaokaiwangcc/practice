// 异步回调 callback hell
// Promise then catch 链式调用但是也是基于回调函数
// async/await 是同步语法，编写异步代码彻底消灭回调函数

// async 返回一个promise
// await 类比于promise then
// async/await 可以用try/catch

async function fn1() {
    console.log('fn1 start')
    await fn2()
    // await 类比于promise then 微任务！！！放入事件循环
    console.log('fn1 end')
}

async function fn2() {
    console.log('async fn2')
}

console.log('script start')
fn1()
console.log('script end')