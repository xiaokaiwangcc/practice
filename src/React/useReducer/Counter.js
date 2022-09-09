import {useReducer} from "react";

const initialState = { count: 0}

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { count: state.count + 1}
        case 'minus':
            return { count: state.count - 1}
        default:
            throw new Error()
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'minus'})}>-</button>
            <button onClick={() => dispatch({type: 'add'})}>+</button>
        </>
    );
}

export default Counter