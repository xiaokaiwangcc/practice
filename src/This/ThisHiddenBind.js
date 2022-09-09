function foo(el) { console.log( el, this.id ); }
var obj = { id: "awesome" };
// 调用 foo(..) 时把 this 绑定到obj
[1, 2, 3].forEach( foo, obj ); // 1 awesome 2 awesome 3 awesome


const wang  = {
    name: 'xk',
    age: '27'
};
[1,2,3].forEach(function (item){
    console.log(item)
    console.log(this.name)
}, wang)