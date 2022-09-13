const div1 = document.getElementById('div1')

div1.addEventListener('drag', throttle((e) => {
    console.log(e.offsetX, e.offsetY);
}, 200))

function throttle(fn, delay){
    let flag = true
    return function (){
        if (flag){
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, delay)
        }
        flag = false
    }
}