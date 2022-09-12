// 编写一个通用的事件监听函数
// 描述事件冒泡的流程
// 无线下拉的图片列表如何监听每一个图片的点击

function bindEvent(elem, type, fn){
    elem.addEventListener(type, fn)
}

const btn1 = document.getElementById('btn1')

// bindEvent(btn1, 'click', (e) => {
//     console.log(e.target)
//     e.preventDefault()
//     alert('clicked')
// })


// 事件冒泡

const p1 = document.getElementById('p1')
bindEvent(p1, 'click', (e) => {
    // 阻止冒泡
    e.stopPropagation()
    console.log('激活')
})
const body = document.body
bindEvent(body, 'click', (e) => {
    console.log('取消')
})


// 事件代理

// 代码简洁 减少浏览器内存占用 但是不要滥用（瀑布流）
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', (e) => {
    e.preventDefault()
    const target = e.target
    if (target.nodeName === 'A'){
        alert(target.innerHTML)
    }
})

const btn2 = document.getElementById('btn2')
const frag = document.createDocumentFragment()

let index = 5
bindEvent(btn2, 'click', (e) => {
    e.preventDefault()
    for (let i = index; i < index+4; i++) {
        const a = document.createElement('a')
        a.innerHTML = `a${i}`
        a.href = '#'
        frag.appendChild(a)
    }
    div3.appendChild(frag)
    index = index+4
})
