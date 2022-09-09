function Parent(name) {
    this.parent = name;
}

Parent.prototype.say = function (){
    console.log(`${this.parent}: 你打篮球的样⼦像kunkun`);
}

function Child(name, parent) {
    Parent.call(this, parent);
    this.child = name;
}
// 1.直接继承
// Child.prototype = new Parent()
// child.prototype.constructor = child;

// 2.借助中间空函数
// var nop = function(){}
// nop.prototype = parent.prototype;
// child.prototype = new nop();
// child.prototype.constructor = child;

// 3.Object.setPrototypeOf
// Object.setPrototypeOf(Child.prototype,Parent.prototype);

// 4.Object.create
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.say = function() {
    console.log(`${this.parent}好，我是练习时⻓两年半的${this.child}`);
}

const parent = new Parent('father');
parent.say();
// father: 你打篮球的样⼦像kunkun
const child = new Child('cxk', 'father');
child.say();
// father好，我是练习时⻓两年半的cxk
console.log(Object.getPrototypeOf(child))