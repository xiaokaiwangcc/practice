const CurryingFunc = () => {
    function currying() {
        // 原因分析，刚开始没有吧每次调用的参数放进args数组
        // 获取函数参数
        const args = Array.prototype.slice.call(arguments)
        // 闭包存储变量
        const addFunc = function (){
            args.push(...arguments)
            return addFunc
        }
        // 重写toString
        addFunc.toString = function (){
            return args.reduce((a,b) => a+b)
        }
        return addFunc
    }
    // 隐式转换获取闭包存取的值
    console.log(currying(1)(2)(3)(8)(9)+'');
    return <div>函数柯里化</div>
}

export default CurryingFunc