// var a = 2;
//
// function foo() {
//     console.log(this.a);
// }
// foo.call(null, 2);


function foo(a,b,c) { console.log( "a:" + a + ", b:" + b, "c:" + c,); }
// // 把数组“展开”成参数
// foo.apply( null, [2, 3] ); // a:2, b:3


// 使用 bind(..) 进行柯里化
var bar = foo.bind( Object.create(null), 2 );
bar( 3,4); // a:2, b:3
