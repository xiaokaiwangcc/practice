const input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(
    (e) => {
        console.log(e.target)
        console.log(input1.value)
    }, 500
))

function debounce(fn, delay){
    let timer = null
    return function (){
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            // 重要！！！
            fn.apply(this, arguments)
            timer = null
        }, delay)
    }
}