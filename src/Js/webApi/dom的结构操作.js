// 新增/插入节点

const div1 = document.getElementById('div1')

// new node
const newP = document.createElement('p')
newP.innerHTML = 'this is p1'
div1.appendChild(newP)

// move node
const p1 = document.getElementById('p1')
const div2 = document.getElementById('div2')
div2.appendChild(p1)

// get parent node
console.log(p1.parentNode)

// get children list
const childList = div1.childNodes
console.log('childList', childList)

const childPList = Array.from(childList).filter(item => item.nodeType === 1)
console.log('childPList', childPList)

// delete child p
div1.removeChild(childPList[2])