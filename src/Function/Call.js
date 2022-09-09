Function.prototype.myCall = function (context) {
    context.fn = this;
    let args = [];
    let argumentList = [...arguments].slice(1);
    for (let i = 0; i < argumentList.length; i++) {
        args.push(argumentList[i]);
    }
    // context.fn(...args);
    let result = context.fn(...args);
    delete context.fn;
    return result;
}
function demo(age, name) {
    console.log('age', age, name)
}
console.log(demo.myCall({age: '20'}, 30, '实现call'))