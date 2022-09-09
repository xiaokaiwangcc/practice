import {useEffect, useState} from "react";
import {flushSync} from "react-dom";

export default function FnSetState(props){
    const [ number , setNumber ] = useState(0)
    /* 监听 number 变化 */
    useEffect(()=>{
        console.log('监听number变化，此时的number是:  ' + number )
    },[ number ])
    const handerClick = ()=>{
        /** 高优先级更新 **/
        flushSync(()=>{
            setNumber(2)
        })
        /* 批量更新 */
        setNumber(1)
        /* 滞后更新 ，批量更新规则被打破 */
        setTimeout(()=>{
            setNumber(3)
        })

    }
    console.log(number)
    return <div>
        <span> { number }</span>
        <button onClick={ handerClick }  >FnSetState number++</button>
    </div>
}