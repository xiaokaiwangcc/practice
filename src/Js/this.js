// this取什么值都是在调用时确认的，不是在定义时确认的

// 箭头函数的this  是取决于上级作用域

function fn1() {
    console.log(this)
}

// fn1()

fn1.call({x: '100'})

const fn2 = fn1.bind({x: 200})
fn2()

Function.prototype.MyBind = function (context){
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
}

const fn3 = fn1.MyBind({x: 300})
fn3()