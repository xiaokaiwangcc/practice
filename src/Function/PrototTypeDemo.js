// 测试原形链 此处只有a的在来链上

var F = function (){};

Object.prototype.a = function (){
    console.log('a')
};

Function.prototype.b = function (){
    console.log('b')
};

const f = new F();
console.log(f);
f.a()
// demo.b()
console.log('F.prototype.__proto__ === Object.prototype', F.prototype.__proto__ === Object.prototype)
console.log('F.__proto__ === Function.prototype', F.__proto__ === Function.prototype)
console.log('F.__proto__.constructor === F', F.__proto__.constructor === F);
console.log('f.__proto__ === F.prototype', f.__proto__ === F.prototype);
console.log('f.constructor', f.constructor === F)
console.log('f.constructor', f.__proto__.constructor === F)

console.log(Object instanceof Function)
console.log(Function instanceof Object)