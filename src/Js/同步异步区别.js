// 单线程和异步
// 1.js是单线程语言，同时只能做一件事儿
// 2.浏览器和nodejs以支持js启动进程，如web worker
// 3.Js和dom渲染公用一个线程，因为JS可以修改dom结构
// 异步不会阻塞代码执行
// 同步会阻塞代码执行


// 遇到等待（网络请求，定时任务）不能卡主，所以需要异步，按照回调函数来调用



// 应用场景
// ajax图片加载，定时任务
// callback hell 和 Promise

// 手写promise加载图片
function loadImg(url) {
    return new Promise((resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = '图片加载失败'
                reject(err)
            }
            img.src = url
        })
}