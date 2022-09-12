// 1.三种状态 pending resolved rejected


// 2.状态的表现和变化
// pending -> resolved或者 pending-> rejected  变化不可逆
// pending状态不会触发then和catch
// resolved状态会触发后续的then回调函数
// rejected状态，会触发后续的catch回调函数


// 3.then和catch对状态的影响
// then正常返回resolved，里面有报错返回rejected
// catch正常返回resolved，里面有报错返回rejected

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(5)
    })
})
console.log('p1', p1)
setTimeout(
    ()=> {
        console.log(p1)
    }
)

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(5)
    })
}).catch(err => {
    console.log('err', err)
})
console.log('p2', p2)
setTimeout(
    ()=> {
        console.log('setTimeout', p2)
    }
)

// 直接返回
const p3 = Promise.resolve(5)
const p4 = Promise.reject(5)

const p5 = new Promise((resolve, reject) => {
    resolve(11)
}).then((res) => {
    console.log(res)
    throw 'kkkk'
}).then(() => {
    console.log('then 里面报错')
}).catch((err) => {
    console.log('err', err)
}).then(res => {
    console.log('catch后的then')
})
console.log('p5', p5)
