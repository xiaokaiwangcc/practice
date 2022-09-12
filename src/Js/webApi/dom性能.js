// dom查询做缓存

/*
for (let i = 0; i < document.getElementsByTagName('p'); i++) {
    // ...
}

const pList = document.getElementsByTagName('p')
for (let i = 0; i < pList.length; i++) {
    // ...
}
*/

// 频繁操作改为一次性操作
const list = document.getElementById('list')

// console.time('a')
// for (let i = 0; i < 10000; i++) {
//     const li = document.createElement('li')
//     li.innerHTML = `List item ${i}`
//     list.appendChild(li)
// }
// console.timeEnd('a')

console.time('b')
const frag = document.createDocumentFragment()
for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = `List item ${i}`
    frag.appendChild(li)
}
list.appendChild(frag)
console.timeEnd('b')