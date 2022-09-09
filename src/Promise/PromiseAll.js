Promise.myAll = function (promises) {
    let res
    let rej
    let result = []
    let fulFilledCount = 0 // 完成的数量
    let p = new Promise( (resolve, reject) => {
        res = resolve
        rej = reject
    })
    let count = 0
    // 不能用for循环因为只是可迭代 不一定为数组
    for (const promise of promises) {
        // 闭包保存i下标
        const i = count
        // 转换为Promise， then可以接受res和rej，同步执行完在执行.then的微任务
        Promise.resolve(promise).then(data => {
            result[i] = data
            fulFilledCount++
            if (fulFilledCount === count){
                res(result)
            }
        }, rej)
        count++
    }
    // 不一定是数组
    if (count === 0) {
        res(result)
    }
    return p
}

let p = Promise.myAll(
    [
        Promise.reject(5),
        Promise.resolve(4),
        Promise.reject(1),
    ]
).then(data => {
    console.log('p', data)
}).catch(data => {
    console.log('reject', data)
})

let p2 = Promise.myAll([1,2,3]).then(data => {
    console.log('p2', data)
})