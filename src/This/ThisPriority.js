/**
 * 判定隐式绑定和显示绑定优先级
 * @param something
 */
// function foo(something) {
//     this.a = something; }
// var obj1 = { foo: foo };
// var obj2 = {};
//
// obj1.foo( 2 );
// console.log( obj1.a ); // 2
//
// obj1.foo.call( obj2, 3 );
// console.log( obj2.a ); // 3
//
// var bar = new obj1.foo( 4 );
// console.log( obj1.a ); // 2
// console.log( bar.a ); // 4


/**
 * 显示绑定和new优先级
 * @param something
 */
function foo(something) {
    this.a = something;
}
var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
console.log( obj1.a ); // 2


var baz = new bar(3);
console.log( obj1.a ); // 2
console.log( baz.a ); // 3