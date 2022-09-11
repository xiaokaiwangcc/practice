function create() {
    const a = 100
    return function (){
        console.log(a)
    }
}

const fn = create()
const a = 200
fn()


function create2() {
    const a = 100
    fnDemo()
}

function fnDemo(){
    console.log(a)
}

const fn2 = create2()