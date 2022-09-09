import React, {useContext} from 'react';
import TestContext from "./context/context";

const Child = React.memo(function({val, onChange}) {
    console.log('Child render...')
    console.log(val)
    console.log(onChange)
    return (
        <input value={val} onChange={onChange} />
    )
});

export default Child