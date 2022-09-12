const div1 = document.getElementById('div1')
console.log('div1', div1)

const divList = document.getElementsByTagName('div')
console.log('divList', divList.length)

const containerList = document.getElementsByClassName('.container')
console.log('containerList', containerList.length)


const pList = document.querySelectorAll('p')
console.log('pList', pList.length)
console.log('pList[0]', pList[0])

// property 修改对象属性不会体现到html结构中
const p1 = pList[0]
// p1.style.width = '100px'
// p1.style.backgroundColor = 'red'
// console.log(p1.style.width)
// console.log('p1.nodeName', p1.nodeName)
// console.log('p1.nodeType', p1.nodeType)

// attribute 修改html属性会修改html结构
p1.setAttribute('data-name', 'imooc')
console.log(p1.getAttribute('data-name'));
p1.setAttribute('style', 'font-size: 50px')

// 都有可能引起DOM的重新渲染！！！