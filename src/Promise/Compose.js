function compose(...fns) {
    return x => fns.reduce( (promise, fn) => promise.then(fn), Promise.resolve(x))
}

function addTwo(x) {
    return x+2
}

function addThree(x) {
    return x+3
}

const addFive = compose(addTwo, addThree)

addFive(2).then(res => {
    console.log(res)
})