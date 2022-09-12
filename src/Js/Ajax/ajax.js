const xhr = new XMLHttpRequest()


// xhr.readyState
// 0-（未初始化）还没有调用send()方法
// 1-（载入）已调用send()方法 ，正在发送请求
// 2-（载入完成）send()方法执行完成，已经接收到全部响应内容心
// 3-（交互）正在解析响应内容
// 4-（完成）响应内容解析完成，可以在客户端调用


// xhr.status
// 2xx 代表成功处理请求 如200
// 3xx 需要重定向 浏览器直接跳转 301 302 304
// 4xx 客户端请求错误 404 403
// 5xx 服务器错误
xhr.open("GET", 'data.json', false)
xhr.onreadystatechange = function (){
    if (xhr.readyState === 4){
        if (xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
            alert(xhr.responseText)
        }else {
            console.log('其他情况')
        }
    }
}

xhr.send(null)


// xhr.open("POST", 'data.json', false)
// xhr.onreadystatechange = function (){
//     if (xhr.readyState === 4){
//         if (xhr.status === 200){
//             console.log(JSON.parse(xhr.responseText))
//             alert(xhr.responseText)
//         }else {
//             console.log('其他情况')
//         }
//     }
// }
//
// const postData = {}
// xhr.send(JSON.stringify(postData))

function ajax(url){
    const p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function (){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }else if(xhr.status === 404){
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
