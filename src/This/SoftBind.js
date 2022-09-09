// if (!Function.prototype.softBind) {
//     Function.prototype.softBind = function (obj) {
//         var fn = this; // 捕获所有 curried 参数
//         var curried = [].slice.call(arguments, 1);
//         var bound = function () {
//             return fn.apply((!this || this === global) ? obj : this,
//                 curried.concat.apply(curried, arguments)
//             );
//         };
//         bound.prototype = Object.create(fn.prototype);
//         return bound;
//     };
// }
//
//
// function foo() { console.log("name: " + this.name); }
// var obj = { name: "obj" }, obj2 = { name: "obj2" }, obj3 = { name: "obj3" };
// var fooOBJ = foo.softBind( obj ); fooOBJ(); // name: obj
// obj2.foo = foo.softBind(obj); obj2.foo(); // name: obj2 <---- 看！！！
// fooOBJ.call( obj3 ); // name: obj3 <---- 看！
// setTimeout( obj2.foo, 10 ); // name: obj <---- 应用了软绑定function json2str(o) {

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
console.log(generatedData)