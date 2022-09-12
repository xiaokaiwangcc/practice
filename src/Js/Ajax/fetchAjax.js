function ajax(url){
    return fetch(url).then(res => res.json())
}

console.log(ajax('https://mcs.snssdk.com/list').then(res => {
    console.log(res)
}));