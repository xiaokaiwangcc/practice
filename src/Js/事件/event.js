// 编写一个通用的事件监听函数
// 描述事件冒泡的流程
// 无线下拉的图片列表如何监听每一个图片的点击

function bindEvent(elem, type, fn){
    elem.addEventListener(type, fn)
}

function bindEventAdvance(elem, type, selector,fn){
    if (fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type, (event) => {
        const target = event.target
        if (selector){
            // 代理绑定
            if (target.matches(selector)){
                fn.call(target, event)
            }
        }else {
            fn.call(target, event)
        }
    })
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
// bindEvent(div3, 'click', (e) => {
//     e.preventDefault()
//     const target = e.target
//     if (target.nodeName === 'A'){
//         alert(target.innerHTML)
//     }
// })

bindEventAdvance(div3, 'click', 'A', function (e)  {
    e.preventDefault()
    alert(this.innerHTML)
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

// 事件冒泡原理是基于dom的树形结构往上冒泡，然后可以在上级接受到事件的触发，使用场景事件代理
