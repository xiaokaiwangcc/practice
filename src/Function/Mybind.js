// 实现bind
Function.prototype.MyBind = function (context) {
    // 调用的方法本身
    const self = this;
    // 类数组->真数组
    const args = Array.prototype.slice.call(arguments, 1);
    // 中转函数
    const temp = function () {};
    const bound = function () {
        // 将新函数执行时的参数arguments数组化，然后与绑定时的参数合并
        const newArgs = Array.prototype.slice.call(arguments);
        // 如果被new调用，this应该是bound的实例
        return self.apply(this instanceof bound ? this : context || global, args.concat(newArgs));
    };
    // 中转原型链
    // 说明绑定过后的函数被new实例化之后，需要继承原函数的原型链方法，且绑定过程中提供的this被忽略（继承原函数的this对象），但是参数还是会使用。
    temp.prototype = self.prototype;
    bound.prototype = new temp();
    return bound;
};

const obj = {
    name: 'xiaoWang'
}

function test(...arg){
    console.log(arg)
}

// const bindTest = test.MyBind(obj, 30)
// console.log(new bindTest(20))

Function.prototype.ThreeBind = function (thisArgObj, argArray) {
    const thisObj = this;
    const bindFunc = function (){
        return thisObj.apply(thisArgObj, argArray)
    }
    bindFunc.prototype = Object.create(thisObj.prototype)
    return bindFunc
}
const bindTest2 = test.ThreeBind(obj, [30, 20])
bindTest2(20)
new bindTest2(20)



const arr = [3, 56, 56, 23, 7, 76, -2, 345, 45, 76, 3];
const num = 37
const findClosest = (arr, num) => {
    const creds = arr.reduce((acc, val, ind) => {
        let { diff, index } = acc;
        const difference = Math.abs(val - num);
        if(difference < diff){
            diff = difference;
            index = ind;
        };
        return { diff, index };
    }, {
        diff: Infinity,
        index: -1
    });
    return arr[creds.index];
};
console.log(findClosest(arr, num));

function json2str(o) {
    let arr = [];
    const fmt = function(s) {
        if(typeof s == 'object' && s !== null) return json2str(s);
        return /^(string)$/.test(typeof s) ? `"${s}"`: s;
    }
    for (var i in o) arr.push(`"${i}":${fmt(o[i])}`)
    return `{${arr.join(',')}}`
}
const obj = { name: "Lily", age: 30, tel: "132xxxxxxxx", address: { city : "beijing", district: "haidian", detail: "dddddddd"} };
const generatedData = json2str(obj)