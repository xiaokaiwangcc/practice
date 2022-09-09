import Child from './Child'
import {useCallback, useState} from "react";
import CreateContext from "./context/context";
import ClassUseContext from "./context/ClassUseContext";
import FunctionUseContext from "./context/FunctionUseContext";
import Counter from "./useReducer/Counter";


const Parent = () =>{
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [count, setCount] = useState(0)
    const [store, setStore] = useState('context\'s value is string!')
    const ubDemo = useCallback(() => {
        childMethod()
    }, [])
    const parentMethod = () => {
        setCount(count => count+1)
        console.log('parentMethod')
    }

    const childMethod = () => {
        console.log('childMethod')
    }

    const umDemo = useCallback(() => {
        childMethod()
    }, [])


    return (
        <CreateContext.Provider value={{ store, setStore }}>
            <button onClick={() => setCount(count => count+1)}>+1</button>
            <button onClick={() => setStore('值改变')}>改变context的值</button>
            <Child childMethod={ubDemo}/>

            <>{count}</>
            <ClassUseContext />
            <FunctionUseContext />
            <Counter />
            <button onClick={parentMethod}>parentMethod</button>
        </CreateContext.Provider>
    );
}

export default Parent