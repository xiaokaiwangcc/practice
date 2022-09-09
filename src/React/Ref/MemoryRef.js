import {useEffect, useRef} from "react";

const toLearn = [{type: 1, mes: 'let us learn React'}, {type: 2, mes: 'let us learn Vue3.0'}]
export default function MemoryRef({id}) {
    const typeInfo = useRef(toLearn[0])
    const changeType = (info) => {
        console.log('info', info)
        typeInfo.current = info /* typeInfo 的改变，不需要视图变化 */
    }
    useEffect(() => {
        console.log('typeInfo.current', typeInfo.current)
        if (typeInfo.current.type === 1) {
            console.log(1111)
            /* ... */
        }
    }, [id]) /* 无须将 typeInfo 添加依赖项  */
    return <div>
        {
            toLearn.map(item => <button key={item.type} onClick={changeType.bind(null, item)}>{item.mes}</button>)
        }
    </div>
}